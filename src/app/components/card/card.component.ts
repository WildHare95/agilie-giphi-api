import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

interface ICard {
  username?: string,
  title: string,
  postDate: string,
  srcImg: string
}

@Component({
  selector: 'agilie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() cardInfo!: ICard
  @Input() isLoading!: boolean
}
