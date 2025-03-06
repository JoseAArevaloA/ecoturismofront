import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide',
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  images: string[] = [
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-39871434/original/6df04e41-33af-4542-8a46-d4bed82338af.jpeg?im_w=720&im_format=avif",
    "https://a0.muscache.com/im/pictures/a6bab7cd-3ecd-4743-9f7b-98958af85f25.jpg?im_w=720&im_format=avif",
    "https://a0.muscache.com/im/pictures/miso/Hosting-642033897110191203/original/0f644626-0a2b-480e-900a-9f5a3ba7f59d.jpeg?im_w=720&im_format=avif",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1045347397943323289/original/3ef3a976-9659-45e3-856e-a83082d0b9a4.jpeg?im_w=720&im_format=avif"
  ];
  index = 0;
  intervalId: any;

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  showSlide(i: number) {
    if (!this.slider) return;
    if (i >= this.images.length) this.index = 0;
    if (i < 0) this.index = this.images.length - 1;
    this.slider.nativeElement.style.transform = `translateX(-${this.index * 100}%)`;
  }

  nextSlide() {
    this.index++;
    this.showSlide(this.index);
  }

  prevSlide() {
    this.index--;
    this.showSlide(this.index);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.index++;
      this.showSlide(this.index);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
