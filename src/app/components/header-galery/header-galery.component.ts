import { Component, OnInit, Input } from '@angular/core';
import { HostingService } from '../../services/hosting.service';
import { data } from 'aws-cdk';
import { ActivatedRoute } from '@angular/router';
import { Hosting } from '../../models/HostingModel';

@Component({
  selector: 'app-header-galery',
  imports: [],
  templateUrl: './header-galery.component.html',
  styleUrl: './header-galery.component.css'
})
export class HeaderGaleryComponent implements OnInit{
  @Input() hosting!: Hosting;
  
  constructor(public hostingService: HostingService, private route: ActivatedRoute,){

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hostingService.getHosting(id).subscribe((data) => {
        this.hosting = data;
      });
    }
  }
}
