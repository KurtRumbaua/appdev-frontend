import { Component, Input } from '@angular/core'

@Component({
  selector: 'dog-card',
  templateUrl: 'dog-card.component.html',
  styleUrls: ['dog-card.component.css'],
})
export class DogCard {
  @Input()
  dogGender1: string = 'Male'
  @Input()
  Age: string = 'Age:'
  @Input()
  Breed: string = 'Gender'
  @Input()
  stringBreed: string = 'Breed:'
  @Input()
  text: string = 'Mix'
  @Input()
  stringAge: string = 'Age:'
  @Input()
  Age1: string = 'Adult'
  @Input()
  text7: string = 'Text'
  @Input()
  image_alt: string = 'image'
  @Input()
  text2: string = 'Medium'
  @Input()
  text6: string = 'Text'
  @Input()
  Breed1: string = 'Mix'
  @Input()
  dogSize1: string = 'Medium'
  @Input()
  stringGender: string = 'Gender:'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200'
  @Input()
  text3: string = 'Male'
  @Input()
  dogBreed1: string = 'Mix'
  @Input()
  Gender: string = 'Text'
  @Input()
  stringID: string = 'ID:'
  @Input()
  text5: string = 'Text'
  @Input()
  dogSize: string = 'Size:'
  @Input()
  dogBreed: string = 'Breed:'
  @Input()
  text1: string = 'Adult'
  @Input()
  stringSize: string = 'Size:'
  @Input()
  dogID: string = '1'
  @Input()
  dogAge: string = 'Adult'
  @Input()
  rootClassName: string = ''
  @Input()
  Size: string = 'Medium'
  @Input()
  dogGender: string = 'Gender:'
  constructor() {}
}
