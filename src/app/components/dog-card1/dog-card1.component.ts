import { Component, Input } from '@angular/core'

@Component({
  selector: 'dog-card1',
  templateUrl: 'dog-card1.component.html',
  styleUrls: ['dog-card1.component.css'],
})
export class DogCard1 {
  @Input()
  dogSize: string = 'Size:'
  @Input()
  stringAge: string = 'Age:'
  @Input()
  stringID: string = 'ID:'
  @Input()
  dogAge: string = 'Adult'
  @Input()
  Gender: string = 'Text'
  @Input()
  dogGender: string = 'Gender:'
  @Input()
  stringSize: string = 'Size:'
  @Input()
  Age1: string = 'Adult'
  @Input()
  Breed1: string = 'Mix'
  @Input()
  image_alt: string = 'image'
  @Input()
  dogBreed1: string = 'Mix'
  @Input()
  text3: string = 'Male'
  @Input()
  Size: string = 'Medium'
  @Input()
  text2: string = 'Medium'
  @Input()
  dogSize1: string = 'Medium'
  @Input()
  dogGender1: string = 'Male'
  @Input()
  text7: string = 'Text'
  @Input()
  dogBreed: string = 'Breed:'
  @Input()
  rootClassName: string = ''
  @Input()
  text5: string = 'Text'
  @Input()
  dogID: string = '1'
  @Input()
  stringBreed: string = 'Breed:'
  @Input()
  text6: string = 'Text'
  @Input()
  Age: string = 'Age:'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200'
  @Input()
  Breed: string = 'Gender'
  @Input()
  text: string = 'Mix'
  @Input()
  stringGender: string = 'Gender:'
  @Input()
  text1: string = 'Adult'
  constructor() {}
}
