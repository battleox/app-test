import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReversePipe } from './reverse.pipe';



describe('describe', () => {

  it('should create the zpp', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });



});
