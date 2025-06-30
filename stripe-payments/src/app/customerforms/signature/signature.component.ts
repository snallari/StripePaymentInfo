import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @Output() signatureChange = new EventEmitter<string>();

  private ctx!: CanvasRenderingContext2D;
  private drawing = false;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.ctx.strokeStyle = '#222';
    this.ctx.lineWidth = 2;
  }

  startDrawing(event: MouseEvent | TouchEvent) {
    this.drawing = true;
    this.ctx.beginPath();
    const pos = this.getPosition(event);
    this.ctx.moveTo(pos.x, pos.y);
  }

  draw(event: MouseEvent | TouchEvent) {
    if (!this.drawing) return;
    const pos = this.getPosition(event);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke();
  }

  stopDrawing() {
    this.drawing = false;
    this.signatureChange.emit(this.canvasRef.nativeElement.toDataURL());
  }

  clear() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.signatureChange.emit('');
  }

  private getPosition(event: MouseEvent | TouchEvent) {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    let x = 0, y = 0;
    if (event instanceof MouseEvent) {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    } else if (event.touches && event.touches.length > 0) {
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    }
    return { x, y };
  }
}
