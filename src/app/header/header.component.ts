import { Component, Input, OnInit } from '@angular/core';
import { NodeMapComponent } from '../node-map/node-map.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() nodeMapComponent: NodeMapComponent;

  algorithmButtonText: string;
  algorithmButtonFunction: any;
  algorithmDelay: number;

  sendClearMap = (): void => {
    console.log('(from header) sent map clear message');
    this.nodeMapComponent.clearMap();
  }

  sendAlgorithmStart = (): void => {
    console.log('(from header) sent request to start algorithm');
    this.nodeMapComponent.startAlgorithm();

    this.algorithmButtonText = "Stop Algorithm";
    this.algorithmButtonFunction = this.sendAlgorithmStop;
  }

  sendAlgorithmStop = (): void => {
    console.log('(from header) sent request to stop algorithm');
    this.nodeMapComponent.stopAlgorithm();
    
    this.algorithmButtonText = "Resume Algorithm";
    this.algorithmButtonFunction = this.sendAlgorithmResume;
  }  

  sendAlgorithmResume = (): void => {
    console.log('(from header) sent request to resume algorithm');
    this.nodeMapComponent.resumeAlgorithm();

    this.algorithmButtonText = "Stop Algorithm";
    this.algorithmButtonFunction = this.sendAlgorithmStop;
  }

  sendDelayChange = (event: any): void => {
    let newDelay = parseInt(event.target.value);
    console.log(`(from header) sent request to change delay to ${newDelay}`);

    this.nodeMapComponent.changeAlgorithmDelay(newDelay);
  }

  sendAlgorithmChange = (event: any): void => {
    let newAlgorithm = event.target.value;
    console.log(`(from header) sent request to change algorithm to ${newAlgorithm}`);

    this.nodeMapComponent.changeAlgorithmService(newAlgorithm);
  }

  // TEST FUNCTION
  sendCompleteCycle = (): void => {
    console.log('(from header) sent request to do complete execution');
    
    this.nodeMapComponent.doCompleteCycle();
  }
  
  resetAlgorithmButton = () => {
    this.algorithmButtonText = "Restart Algorithm";
    this.algorithmButtonFunction = this.sendAlgorithmStart;
  }

  ngOnInit(): void {
    this.algorithmButtonText = "Start Algorithm";
    this.algorithmButtonFunction = this.sendAlgorithmStart;
    this.algorithmDelay = 60;
  }
}
