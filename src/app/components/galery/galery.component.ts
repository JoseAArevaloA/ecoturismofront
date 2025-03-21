import { Component, Input, OnInit } from '@angular/core';
import { HeaderGaleryComponent } from "../header-galery/header-galery.component";
// import { Hostingmodel } from '../../models/hosting.model';
import { HostingService } from '../../services/hosting.service';
import { ActivatedRoute } from '@angular/router';
import { Hosting } from '../../models/HostingModel';

@Component({
  selector: 'app-galery',
  imports: [HeaderGaleryComponent],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent implements OnInit{
  @Input() hosting!: Hosting;
  
  constructor(public hostingService: HostingService, private route: ActivatedRoute,){

  }
  ngOnInit(): void {
    this.getHosting()
  }

  getHosting(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hostingService.getHosting(id).subscribe((data) => {
        this.hosting = data;
      });
    }

  }
}
 