import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.development'
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private _http: HttpClient) {}


  public getGifsTrending(limit: number = 10, offset: number = 0) {
    return this._http.get(`${environment.apiURL}/${environment.resource.gifs}/${environment.endpoints.trending}`)
  }

  public getGifsTrendingMock() {
    return of({
      "data": [
      {
        "type": "gif",
        "id": "yyrgA02wf7GAChgikz",
        "url": "https://giphy.com/gifs/GoVote-vote-election-michigan-yyrgA02wf7GAChgikz",
        "slug": "GoVote-vote-election-michigan-yyrgA02wf7GAChgikz",
        "bitly_gif_url": "https://gph.is/g/4gKrBvL",
        "bitly_url": "https://gph.is/g/4gKrBvL",
        "embed_url": "https://giphy.com/embed/yyrgA02wf7GAChgikz",
        "username": "GoVote",
        "source": "",
        "title": "Election Day GIF by #GoVote",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2022-10-14 16:58:19",
        "trending_datetime": "2024-02-25 23:45:07",
        "images": {
          "original": {
            "height": "480",
            "width": "480",
            "size": "1049469",
            "url": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "201072",
            "mp4": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "616326",
            "webp": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "40",
            "hash": "8490ef35ccfc58cdb450c54f4d814f18"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "323226",
            "url": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "31937",
            "mp4": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "214920",
            "webp": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "50162",
            "url": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "52710",
            "webp": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "125685",
            "url": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "10663",
            "mp4": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "84840",
            "webp": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "323226",
            "url": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "31937",
            "mp4": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "214920",
            "webp": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "50162",
            "url": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "52710",
            "webp": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "125685",
            "url": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "10663",
            "mp4": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "84840",
            "webp": "https://media3.giphy.com/media/yyrgA02wf7GAChgikz/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/GoVote/PEIQNUsKiSpl.gif",
          "banner_image": "https://media0.giphy.com/headers/GoVote/hBO0NRsvVwPV.gif",
          "banner_url": "https://media0.giphy.com/headers/GoVote/hBO0NRsvVwPV.gif",
          "profile_url": "https://giphy.com/GoVote/",
          "username": "GoVote",
          "display_name": "#GoVote",
          "description": "Amazing artists have come together to make awesome art to encourage you to #GoVote. Find one that you dig and share it with your friends & family to encourage them to vote during your next local or federal election.",
          "instagram_url": "https://instagram.com/govote",
          "website_url": "http://govote.org/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPXl5cmdBMDJ3ZjdHQUNoZ2lreiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXl5cmdBMDJ3ZjdHQUNoZ2lreiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXl5cmdBMDJ3ZjdHQUNoZ2lreiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXl5cmdBMDJ3ZjdHQUNoZ2lreiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "s2qXK8wAvkHTO",
        "url": "https://giphy.com/gifs/party-birthday-celebration-s2qXK8wAvkHTO",
        "slug": "party-birthday-celebration-s2qXK8wAvkHTO",
        "bitly_gif_url": "http://gph.is/1aPAh1Z",
        "bitly_url": "http://gph.is/1aPAh1Z",
        "embed_url": "https://giphy.com/embed/s2qXK8wAvkHTO",
        "username": "",
        "source": "http://www.gifbay.com/gif/how_i_feel_with_on_cakeday_today_and_birthday_on_tuesday-32087/",
        "title": "Happy Birthday Yes GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.gifbay.com",
        "source_post_url": "http://www.gifbay.com/gif/how_i_feel_with_on_cakeday_today_and_birthday_on_tuesday-32087/",
        "is_sticker": 0,
        "import_datetime": "2013-09-20 04:10:41",
        "trending_datetime": "2019-08-26 19:45:14",
        "images": {
          "original": {
            "height": "166",
            "width": "252",
            "size": "447286",
            "url": "https://media2.giphy.com/media/s2qXK8wAvkHTO/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "334865",
            "mp4": "https://media2.giphy.com/media/s2qXK8wAvkHTO/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "134442",
            "webp": "https://media2.giphy.com/media/s2qXK8wAvkHTO/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "27",
            "hash": "52e656201c0e77fb6c65b9c5f92423ae"
          },
          "fixed_height": {
            "height": "200",
            "width": "304",
            "size": "617756",
            "url": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "141370",
            "mp4": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "157210",
            "webp": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "304",
            "size": "146878",
            "url": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "92176",
            "webp": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "152",
            "size": "199322",
            "url": "https://media2.giphy.com/media/s2qXK8wAvkHTO/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "50357",
            "mp4": "https://media2.giphy.com/media/s2qXK8wAvkHTO/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "58274",
            "webp": "https://media2.giphy.com/media/s2qXK8wAvkHTO/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "132",
            "width": "200",
            "size": "378178",
            "url": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "80484",
            "mp4": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "88672",
            "webp": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "132",
            "width": "200",
            "size": "87678",
            "url": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "45782",
            "webp": "https://media2.giphy.com/media/s2qXK8wAvkHTO/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "66",
            "width": "100",
            "size": "100973",
            "url": "https://media2.giphy.com/media/s2qXK8wAvkHTO/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "27224",
            "mp4": "https://media2.giphy.com/media/s2qXK8wAvkHTO/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "31140",
            "webp": "https://media2.giphy.com/media/s2qXK8wAvkHTO/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPXMycVhLOHdBdmtIVE8mZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWIxMjNhNjE2bmpvMDRvaGNxd212OWJ0d2JkbmdkcWh2NGdjZ3JtbXNzY2JjODJ6MiZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXMycVhLOHdBdmtIVE8mZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWIxMjNhNjE2bmpvMDRvaGNxd212OWJ0d2JkbmdkcWh2NGdjZ3JtbXNzY2JjODJ6MiZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXMycVhLOHdBdmtIVE8mZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWIxMjNhNjE2bmpvMDRvaGNxd212OWJ0d2JkbmdkcWh2NGdjZ3JtbXNzY2JjODJ6MiZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXMycVhLOHdBdmtIVE8mZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWIxMjNhNjE2bmpvMDRvaGNxd212OWJ0d2JkbmdkcWh2NGdjZ3JtbXNzY2JjODJ6MiZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "sDKKD22HiiNH19QnIi",
        "url": "https://giphy.com/gifs/spiritawards-independent-spirit-awards-indie-sDKKD22HiiNH19QnIi",
        "slug": "spiritawards-independent-spirit-awards-indie-sDKKD22HiiNH19QnIi",
        "bitly_gif_url": "https://gph.is/g/ZWN8vb7",
        "bitly_url": "https://gph.is/g/ZWN8vb7",
        "embed_url": "https://giphy.com/embed/sDKKD22HiiNH19QnIi",
        "username": "spiritawards",
        "source": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "title": "Inspired Spirit Awards GIF by Film Independent Spirit Awards",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.youtube.com",
        "source_post_url": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "is_sticker": 0,
        "import_datetime": "2024-02-25 23:19:35",
        "trending_datetime": "2024-02-25 23:26:13",
        "images": {
          "original": {
            "height": "263",
            "width": "480",
            "size": "3260601",
            "url": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "630200",
            "mp4": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "1652178",
            "webp": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "64",
            "hash": "e00583fd10c3bd4c293ad743c1b81196"
          },
          "fixed_height": {
            "height": "200",
            "width": "365",
            "size": "1886552",
            "url": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "334456",
            "mp4": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "1141614",
            "webp": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "365",
            "size": "208791",
            "url": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "134760",
            "webp": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "183",
            "size": "606979",
            "url": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "114487",
            "mp4": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "406918",
            "webp": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "110",
            "width": "200",
            "size": "636870",
            "url": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "126370",
            "mp4": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "469952",
            "webp": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "110",
            "width": "200",
            "size": "79376",
            "url": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "50704",
            "webp": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "55",
            "width": "100",
            "size": "199700",
            "url": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "43248",
            "mp4": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "164692",
            "webp": "https://media2.giphy.com/media/sDKKD22HiiNH19QnIi/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/spiritawards/Ruc6GB0z1iwr.png",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/spiritawards/",
          "username": "spiritawards",
          "display_name": "Film Independent Spirit Awards",
          "description": "The Film Independent Spirit Awards is the annual celebration of the independent, artist-driven films that bring a unique vision to filmmaking. Watch Live Thursday 4/22 at 10pm on IFC.",
          "instagram_url": "https://instagram.com/filmindependent",
          "website_url": "https://www.filmindependent.org/spirit-awards/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPXNES0tEMjJIaWlOSDE5UW5JaSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXNES0tEMjJIaWlOSDE5UW5JaSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXNES0tEMjJIaWlOSDE5UW5JaSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXNES0tEMjJIaWlOSDE5UW5JaSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "Z5xk7fGO5FjjTElnpT",
        "url": "https://giphy.com/gifs/moodman-dog-confused-rigley-beans-Z5xk7fGO5FjjTElnpT",
        "slug": "moodman-dog-confused-rigley-beans-Z5xk7fGO5FjjTElnpT",
        "bitly_gif_url": "https://gph.is/g/aXgxwVp",
        "bitly_url": "https://gph.is/g/aXgxwVp",
        "embed_url": "https://giphy.com/embed/Z5xk7fGO5FjjTElnpT",
        "username": "",
        "source": "",
        "title": "Dog What GIF by MOODMAN",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2024-01-03 22:27:03",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "498",
            "width": "498",
            "size": "5898001",
            "url": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "1850015",
            "mp4": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "1739730",
            "webp": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "62",
            "hash": "1e8f73017cf1ecb4413fba83574b8802"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "860485",
            "url": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "217065",
            "mp4": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "331210",
            "webp": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "91378",
            "url": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "52550",
            "webp": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "291203",
            "url": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "68512",
            "mp4": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "136842",
            "webp": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "860485",
            "url": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "217065",
            "mp4": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "331210",
            "webp": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "91378",
            "url": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "52550",
            "webp": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "291203",
            "url": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "47448",
            "mp4": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "136842",
            "webp": "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVo1eGs3ZkdPNUZqalRFbG5wVCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVo1eGs3ZkdPNUZqalRFbG5wVCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVo1eGs3ZkdPNUZqalRFbG5wVCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVo1eGs3ZkdPNUZqalRFbG5wVCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "clEXbdQ5s051NoLAgk",
        "url": "https://giphy.com/gifs/sylterinselliebe-hearts-birthday-girl-hbday-clEXbdQ5s051NoLAgk",
        "slug": "sylterinselliebe-hearts-birthday-girl-hbday-clEXbdQ5s051NoLAgk",
        "bitly_gif_url": "https://gph.is/g/aeQgxkN",
        "bitly_url": "https://gph.is/g/aeQgxkN",
        "embed_url": "https://giphy.com/embed/clEXbdQ5s051NoLAgk",
        "username": "sylterinselliebe",
        "source": "",
        "title": "Happy Birthday Hearts GIF by sylterinselliebe",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2022-08-18 14:42:43",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "480",
            "width": "480",
            "size": "84190",
            "url": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "40336",
            "mp4": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "33316",
            "webp": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "2",
            "hash": "1f951c98fd0379ceb71513d9d0aff580"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "21041",
            "url": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "14845",
            "mp4": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "14162",
            "webp": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "21041",
            "url": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "15278",
            "webp": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "8711",
            "url": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "6916",
            "mp4": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "6392",
            "webp": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "21041",
            "url": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "14845",
            "mp4": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "14162",
            "webp": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "21041",
            "url": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "15278",
            "webp": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "8711",
            "url": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "6916",
            "mp4": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "6392",
            "webp": "https://media1.giphy.com/media/clEXbdQ5s051NoLAgk/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/sylterinselliebe/ZGTiPsTCZuMa.jpeg",
          "banner_image": "https://media0.giphy.com/headers/sylterinselliebe/iFD9Yy9ZnDfr.png",
          "banner_url": "https://media0.giphy.com/headers/sylterinselliebe/iFD9Yy9ZnDfr.png",
          "profile_url": "https://giphy.com/sylterinselliebe/",
          "username": "sylterinselliebe",
          "display_name": "sylterinselliebe",
          "description": "Everything about SYLT - a famous and exclusive island in the North Sea, travel hotspot in Germany - the German Hamptons.\r\n\r\n2.4 million tourist overnight stays per year.\r\n\r\nAlles rund um SYLT - eine berühmte und exklusive Insel in der Nordsee, Reise-Hotspot in Deutschland - the German Hamptons.\r\n\r\n2,4 Millionen touristische Übernachtungen pro Jahr.",
          "instagram_url": "https://instagram.com/sylterinselliebe",
          "website_url": "http://www.pundpgmbh.de",
          "is_verified": false
        },
        "analytics_response_payload": "e=Z2lmX2lkPWNsRVhiZFE1czA1MU5vTEFnayZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWNsRVhiZFE1czA1MU5vTEFnayZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWNsRVhiZFE1czA1MU5vTEFnayZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWNsRVhiZFE1czA1MU5vTEFnayZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3oNMQtqpnse0dbFe06",
        "url": "https://giphy.com/gifs/sending-hugs-virtual-send-a-hug-3oNMQtqpnse0dbFe06",
        "slug": "sending-hugs-virtual-send-a-hug-3oNMQtqpnse0dbFe06",
        "bitly_gif_url": "https://gph.is/g/Eq0K7D1",
        "bitly_url": "https://gph.is/g/Eq0K7D1",
        "embed_url": "https://giphy.com/embed/3oNMQtqpnse0dbFe06",
        "username": "dotdave",
        "source": "https://www.3danimatedgifs.com/",
        "title": "Kisses And Hugs Heart GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.3danimatedgifs.com",
        "source_post_url": "https://www.3danimatedgifs.com/",
        "is_sticker": 0,
        "import_datetime": "2021-01-01 12:56:04",
        "trending_datetime": "2021-01-26 01:15:11",
        "images": {
          "original": {
            "height": "400",
            "width": "400",
            "size": "979889",
            "url": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "767254",
            "mp4": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "639578",
            "webp": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "20",
            "hash": "90ed0198ff9279853c0463e9f767da37"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "296847",
            "url": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "113972",
            "mp4": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "150526",
            "webp": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "92820",
            "url": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "69770",
            "webp": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "100296",
            "url": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "36704",
            "mp4": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "51210",
            "webp": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "296847",
            "url": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "113972",
            "mp4": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "150526",
            "webp": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "92820",
            "url": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "69770",
            "webp": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "100296",
            "url": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "36704",
            "mp4": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "51210",
            "webp": "https://media0.giphy.com/media/3oNMQtqpnse0dbFe06/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/dotdave/GCWZ1pNbdV2A.jpg",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/channel/dotdave/",
          "username": "dotdave",
          "display_name": "3D Gif Artist",
          "description": "Original 3D GIFs created by Dave Sutton",
          "instagram_url": "https://instagram.com/3dgifartist",
          "website_url": "https://www.3danimatedgifs.com/",
          "is_verified": false
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNvTk1RdHFwbnNlMGRiRmUwNiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvTk1RdHFwbnNlMGRiRmUwNiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvTk1RdHFwbnNlMGRiRmUwNiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvTk1RdHFwbnNlMGRiRmUwNiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "6UAk2UiNKDBBQn5NUX",
        "url": "https://giphy.com/gifs/AllBetter-grandma-senior-citizen-old-person-6UAk2UiNKDBBQn5NUX",
        "slug": "AllBetter-grandma-senior-citizen-old-person-6UAk2UiNKDBBQn5NUX",
        "bitly_gif_url": "https://gph.is/g/E1LWrqd",
        "bitly_url": "https://gph.is/g/E1LWrqd",
        "embed_url": "https://giphy.com/embed/6UAk2UiNKDBBQn5NUX",
        "username": "AllBetter",
        "source": "",
        "title": "Aging Happy Birthday GIF by All Better",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2023-09-20 13:14:33",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "429",
            "width": "429",
            "size": "1301183",
            "url": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "436079",
            "mp4": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "411168",
            "webp": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "58",
            "hash": "09b94e16f995be4b9ef206d5cd73cc64"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "332153",
            "url": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "97217",
            "mp4": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "125116",
            "webp": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "41796",
            "url": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "34156",
            "webp": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "125707",
            "url": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "35566",
            "mp4": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "49808",
            "webp": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "332153",
            "url": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "97217",
            "mp4": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "125116",
            "webp": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "41796",
            "url": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "34156",
            "webp": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "125707",
            "url": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "35566",
            "mp4": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "49808",
            "webp": "https://media1.giphy.com/media/6UAk2UiNKDBBQn5NUX/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/AllBetter/jqb8LWf1b6qk.gif",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/AllBetter/",
          "username": "AllBetter",
          "display_name": "All Better",
          "description": "Because we all deserve to live safe and healthy lives, in safe and healthy communities.",
          "instagram_url": "",
          "website_url": "https://www.allbetter.art",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTZVQWsyVWlOS0RCQlFuNU5VWCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZVQWsyVWlOS0RCQlFuNU5VWCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZVQWsyVWlOS0RCQlFuNU5VWCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZVQWsyVWlOS0RCQlFuNU5VWCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "tsX3YMWYzDPjAARfeg",
        "url": "https://giphy.com/gifs/tiktok-bear-tsX3YMWYzDPjAARfeg",
        "slug": "tiktok-bear-tsX3YMWYzDPjAARfeg",
        "bitly_gif_url": "https://gph.is/g/4D3zkPZ",
        "bitly_url": "https://gph.is/g/4D3zkPZ",
        "embed_url": "https://giphy.com/embed/tsX3YMWYzDPjAARfeg",
        "username": "tiktok",
        "source": "bit.ly/2BcAl0y",
        "title": "Happy So Excited GIF by TikTok",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "bit.ly/2BcAl0y",
        "is_sticker": 0,
        "import_datetime": "2019-03-19 23:38:47",
        "trending_datetime": "2020-05-15 20:15:05",
        "images": {
          "original": {
            "height": "420",
            "width": "329",
            "size": "3547769",
            "url": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "787222",
            "mp4": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "527236",
            "webp": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "50",
            "hash": "7b44f42d609d2eb34c32f6cf9b318f06"
          },
          "fixed_height": {
            "height": "200",
            "width": "157",
            "size": "670421",
            "url": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "108065",
            "mp4": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "138338",
            "webp": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "157",
            "size": "94094",
            "url": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "51660",
            "webp": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "79",
            "size": "226552",
            "url": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "40642",
            "mp4": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "57228",
            "webp": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "255",
            "width": "200",
            "size": "1005527",
            "url": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "151984",
            "mp4": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "189086",
            "webp": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "255",
            "width": "200",
            "size": "152290",
            "url": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "76706",
            "webp": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "128",
            "width": "100",
            "size": "344342",
            "url": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "47016",
            "mp4": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "77782",
            "webp": "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/tiktok/78F6dPcUBc73.gif",
          "banner_image": "https://media0.giphy.com/headers/tiktok/SRLJgKV9HbQK.gif",
          "banner_url": "https://media0.giphy.com/headers/tiktok/SRLJgKV9HbQK.gif",
          "profile_url": "https://giphy.com/tiktok/",
          "username": "tiktok",
          "display_name": "TikTok",
          "description": "Get the app now  ↓   ↓  ↓\r\nhttp://vm.tiktok.com/mxhMwf/",
          "instagram_url": "https://instagram.com/tiktok",
          "website_url": "https://bit.ly/2BcAl0y",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPXRzWDNZTVdZekRQakFBUmZlZyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXRzWDNZTVdZekRQakFBUmZlZyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXRzWDNZTVdZekRQakFBUmZlZyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXRzWDNZTVdZekRQakFBUmZlZyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "67ThRZlYBvibtdF9JH",
        "url": "https://giphy.com/gifs/looneytunes-looney-tunes-bugs-bunny-pay-day-67ThRZlYBvibtdF9JH",
        "slug": "looneytunes-looney-tunes-bugs-bunny-pay-day-67ThRZlYBvibtdF9JH",
        "bitly_gif_url": "https://gph.is/2xxOmDa",
        "bitly_url": "https://gph.is/2xxOmDa",
        "embed_url": "https://giphy.com/embed/67ThRZlYBvibtdF9JH",
        "username": "looneytunes",
        "source": "",
        "title": "Bugs Bunny Money GIF by Looney Tunes",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2018-09-20 19:02:32",
        "trending_datetime": "2018-12-15 09:00:02",
        "images": {
          "original": {
            "height": "360",
            "width": "480",
            "size": "4137222",
            "url": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "764467",
            "mp4": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "1729938",
            "webp": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "55",
            "hash": "8a45dc879bff6e84980df3bad8d401f7"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "1118537",
            "url": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "246948",
            "mp4": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "836270",
            "webp": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "183525",
            "url": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "115256",
            "webp": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "365182",
            "url": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "64932",
            "mp4": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "244842",
            "webp": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "664872",
            "url": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "140404",
            "mp4": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "501826",
            "webp": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "109179",
            "url": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "68370",
            "webp": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "203075",
            "url": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "37644",
            "mp4": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "147536",
            "webp": "https://media4.giphy.com/media/67ThRZlYBvibtdF9JH/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/LooneyTunes/Dow0vqrcuNN8.jpg",
          "banner_image": "https://media0.giphy.com/headers/looneytunes/hhAxNk0RzY6N.jpg",
          "banner_url": "https://media0.giphy.com/headers/looneytunes/hhAxNk0RzY6N.jpg",
          "profile_url": "https://giphy.com/looneytunes/",
          "username": "looneytunes",
          "display_name": "Looney Tunes",
          "description": "The official Giphy page for Looney Tunes!",
          "instagram_url": "https://instagram.com/@officiallooney",
          "website_url": "",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTY3VGhSWmxZQnZpYnRkRjlKSCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTY3VGhSWmxZQnZpYnRkRjlKSCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTY3VGhSWmxZQnZpYnRkRjlKSCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTY3VGhSWmxZQnZpYnRkRjlKSCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "0hNftgkBHMJ4Oy0oYx",
        "url": "https://giphy.com/gifs/SPTV-season-4-sptv-married-with-children-0hNftgkBHMJ4Oy0oYx",
        "slug": "SPTV-season-4-sptv-married-with-children-0hNftgkBHMJ4Oy0oYx",
        "bitly_gif_url": "https://gph.is/g/ZklpWPy",
        "bitly_url": "https://gph.is/g/ZklpWPy",
        "embed_url": "https://giphy.com/embed/0hNftgkBHMJ4Oy0oYx",
        "username": "SPTV",
        "source": "",
        "title": "Hungry Season 4 GIF by Sony Pictures Television",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2021-09-09 16:26:18",
        "trending_datetime": "2023-08-01 21:00:09",
        "images": {
          "original": {
            "height": "360",
            "width": "480",
            "size": "1859731",
            "url": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "186287",
            "mp4": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "368868",
            "webp": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "22",
            "hash": "b1acf4a828b26a82fe2bd5b4a77e78ba"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "508274",
            "url": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "76177",
            "mp4": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "201842",
            "webp": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "153219",
            "url": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "87510",
            "webp": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "157904",
            "url": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "31744",
            "mp4": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "78442",
            "webp": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "308467",
            "url": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "54039",
            "mp4": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "138450",
            "webp": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "94209",
            "url": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "55264",
            "webp": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "96976",
            "url": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "19746",
            "mp4": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "50066",
            "webp": "https://media4.giphy.com/media/0hNftgkBHMJ4Oy0oYx/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/SPTV/dPpGyLpZI7AZ.jpg",
          "banner_image": "https://media0.giphy.com/headers/SPTV/mHoEuqK0x7Aj.jpg",
          "banner_url": "https://media0.giphy.com/headers/SPTV/mHoEuqK0x7Aj.jpg",
          "profile_url": "https://giphy.com/SPTV/",
          "username": "SPTV",
          "display_name": "Sony Pictures Television",
          "description": "Official Giphy Page for Sony Pictures Television",
          "instagram_url": "https://instagram.com/@SPTV",
          "website_url": "https://www.sonypicturestelevision.com",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTBoTmZ0Z2tCSE1KNE95MG9ZeCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTBoTmZ0Z2tCSE1KNE95MG9ZeCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTBoTmZ0Z2tCSE1KNE95MG9ZeCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTBoTmZ0Z2tCSE1KNE95MG9ZeCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "uvImxFSrmgKEN6CUN5",
        "url": "https://giphy.com/gifs/spiritawards-independent-spirit-awards-indie-uvImxFSrmgKEN6CUN5",
        "slug": "spiritawards-independent-spirit-awards-indie-uvImxFSrmgKEN6CUN5",
        "bitly_gif_url": "https://gph.is/g/ZO7Mvbg",
        "bitly_url": "https://gph.is/g/ZO7Mvbg",
        "embed_url": "https://giphy.com/embed/uvImxFSrmgKEN6CUN5",
        "username": "spiritawards",
        "source": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "title": "Spirit Awards Top GIF by Film Independent Spirit Awards",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.youtube.com",
        "source_post_url": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "is_sticker": 0,
        "import_datetime": "2024-02-25 23:19:27",
        "trending_datetime": "2024-02-25 23:22:36",
        "images": {
          "original": {
            "height": "263",
            "width": "480",
            "size": "1500314",
            "url": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "298683",
            "mp4": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "563410",
            "webp": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "39",
            "hash": "439b01124c440f832ed414ca8f71aa74"
          },
          "fixed_height": {
            "height": "200",
            "width": "365",
            "size": "785047",
            "url": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "163765",
            "mp4": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "383128",
            "webp": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "365",
            "size": "146977",
            "url": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "82970",
            "webp": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "183",
            "size": "298352",
            "url": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "53699",
            "mp4": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "145362",
            "webp": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "110",
            "width": "200",
            "size": "333843",
            "url": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "61260",
            "mp4": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "163176",
            "webp": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "110",
            "width": "200",
            "size": "63086",
            "url": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "34000",
            "webp": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "55",
            "width": "100",
            "size": "102762",
            "url": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "21426",
            "mp4": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "65912",
            "webp": "https://media3.giphy.com/media/uvImxFSrmgKEN6CUN5/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/spiritawards/Ruc6GB0z1iwr.png",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/spiritawards/",
          "username": "spiritawards",
          "display_name": "Film Independent Spirit Awards",
          "description": "The Film Independent Spirit Awards is the annual celebration of the independent, artist-driven films that bring a unique vision to filmmaking. Watch Live Thursday 4/22 at 10pm on IFC.",
          "instagram_url": "https://instagram.com/filmindependent",
          "website_url": "https://www.filmindependent.org/spirit-awards/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPXV2SW14RlNybWdLRU42Q1VONSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXV2SW14RlNybWdLRU42Q1VONSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXV2SW14RlNybWdLRU42Q1VONSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXV2SW14RlNybWdLRU42Q1VONSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "fnK0jeA8vIh2QLq3IZ",
        "url": "https://giphy.com/gifs/nbcworldofdance-cute-fun-world-of-dance-fnK0jeA8vIh2QLq3IZ",
        "slug": "nbcworldofdance-cute-fun-world-of-dance-fnK0jeA8vIh2QLq3IZ",
        "bitly_gif_url": "https://gph.is/g/ZYXKlra",
        "bitly_url": "https://gph.is/g/ZYXKlra",
        "embed_url": "https://giphy.com/embed/fnK0jeA8vIh2QLq3IZ",
        "username": "nbcworldofdance",
        "source": "https://www.nbc.com/world-of-dance",
        "title": "Jennifer Lopez Applause GIF by NBC World Of Dance",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.nbc.com",
        "source_post_url": "https://www.nbc.com/world-of-dance",
        "is_sticker": 0,
        "import_datetime": "2019-03-14 16:41:46",
        "trending_datetime": "2019-07-24 17:15:01",
        "images": {
          "original": {
            "height": "450",
            "width": "450",
            "size": "1929059",
            "url": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "851991",
            "mp4": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "911042",
            "webp": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "17",
            "hash": "abcc558c44b7ba8cf6eb3d55b925582f"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "331417",
            "url": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "118601",
            "mp4": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "149042",
            "webp": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "131110",
            "url": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "67302",
            "webp": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "100274",
            "url": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "32955",
            "mp4": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "49164",
            "webp": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "331417",
            "url": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "118601",
            "mp4": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "149042",
            "webp": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "131110",
            "url": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "67302",
            "webp": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "100274",
            "url": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "32955",
            "mp4": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "49164",
            "webp": "https://media2.giphy.com/media/fnK0jeA8vIh2QLq3IZ/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/nbcworldofdance/EQeFqRSJU1V6.png",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/nbcworldofdance/",
          "username": "nbcworldofdance",
          "display_name": "NBC World Of Dance",
          "description": "NBC's #WorldofDance is now streaming on Peacock TV.",
          "instagram_url": "",
          "website_url": "http://www.nbc.com/world-of-dance",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPWZuSzBqZUE4dkloMlFMcTNJWiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWZuSzBqZUE4dkloMlFMcTNJWiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWZuSzBqZUE4dkloMlFMcTNJWiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWZuSzBqZUE4dkloMlFMcTNJWiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "bHfbJ01CvlJkdQClbB",
        "url": "https://giphy.com/gifs/spiritawards-independent-spirit-awards-indie-bHfbJ01CvlJkdQClbB",
        "slug": "spiritawards-independent-spirit-awards-indie-bHfbJ01CvlJkdQClbB",
        "bitly_gif_url": "https://gph.is/g/aKDlvK9",
        "bitly_url": "https://gph.is/g/aKDlvK9",
        "embed_url": "https://giphy.com/embed/bHfbJ01CvlJkdQClbB",
        "username": "spiritawards",
        "source": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "title": "Aidy Bryant Regret GIF by Film Independent Spirit Awards",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.youtube.com",
        "source_post_url": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "is_sticker": 0,
        "import_datetime": "2024-02-25 23:16:11",
        "trending_datetime": "2024-02-25 23:18:59",
        "images": {
          "original": {
            "height": "262",
            "width": "480",
            "size": "2745200",
            "url": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "592116",
            "mp4": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "758012",
            "webp": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "74",
            "hash": "44234e566dbe817d4c44305269651e12"
          },
          "fixed_height": {
            "height": "200",
            "width": "366",
            "size": "1753143",
            "url": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "307235",
            "mp4": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "499940",
            "webp": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "366",
            "size": "174972",
            "url": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "108820",
            "webp": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "183",
            "size": "622682",
            "url": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "100067",
            "mp4": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "183628",
            "webp": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "109",
            "width": "200",
            "size": "677443",
            "url": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "113638",
            "mp4": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "210372",
            "webp": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "109",
            "width": "200",
            "size": "73770",
            "url": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "41940",
            "webp": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "55",
            "width": "100",
            "size": "196627",
            "url": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "39269",
            "mp4": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "74040",
            "webp": "https://media4.giphy.com/media/bHfbJ01CvlJkdQClbB/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/spiritawards/Ruc6GB0z1iwr.png",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/spiritawards/",
          "username": "spiritawards",
          "display_name": "Film Independent Spirit Awards",
          "description": "The Film Independent Spirit Awards is the annual celebration of the independent, artist-driven films that bring a unique vision to filmmaking. Watch Live Thursday 4/22 at 10pm on IFC.",
          "instagram_url": "https://instagram.com/filmindependent",
          "website_url": "https://www.filmindependent.org/spirit-awards/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPWJIZmJKMDFDdmxKa2RRQ2xiQiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJIZmJKMDFDdmxKa2RRQ2xiQiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJIZmJKMDFDdmxKa2RRQ2xiQiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJIZmJKMDFDdmxKa2RRQ2xiQiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3o6gDWzmAzrpi5DQU8",
        "url": "https://giphy.com/gifs/gq-kim-kardashian-make-it-rain-money-shower-3o6gDWzmAzrpi5DQU8",
        "slug": "gq-kim-kardashian-make-it-rain-money-shower-3o6gDWzmAzrpi5DQU8",
        "bitly_gif_url": "http://gph.is/28JsJpa",
        "bitly_url": "http://gph.is/28JsJpa",
        "embed_url": "https://giphy.com/embed/3o6gDWzmAzrpi5DQU8",
        "username": "gq",
        "source": "http://www.gq.com/story/kim-kardashian-west-kimoji-video",
        "title": "Pay Me Kim Kardashian GIF by GQ",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.gq.com",
        "source_post_url": "http://www.gq.com/story/kim-kardashian-west-kimoji-video",
        "is_sticker": 0,
        "import_datetime": "2016-06-20 15:28:15",
        "trending_datetime": "2019-04-15 21:45:01",
        "images": {
          "original": {
            "height": "400",
            "width": "400",
            "size": "996501",
            "url": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "131450",
            "mp4": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "156856",
            "webp": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "17",
            "hash": "1c2054da3dcd3eedc2abc701c3bb7bd0"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "201926",
            "url": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "28696",
            "mp4": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "47956",
            "webp": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "76114",
            "url": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "43502",
            "webp": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "71525",
            "url": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "12318",
            "mp4": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "21166",
            "webp": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "201926",
            "url": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "28696",
            "mp4": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "47956",
            "webp": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "76114",
            "url": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "43502",
            "webp": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "71525",
            "url": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "12318",
            "mp4": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "21166",
            "webp": "https://media2.giphy.com/media/3o6gDWzmAzrpi5DQU8/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/gq/8m7sr7vc51Gj.jpg",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/gq/",
          "username": "gq",
          "display_name": "GQ",
          "description": "Look Sharp + Live Smart.",
          "instagram_url": "",
          "website_url": "http://gq.com/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNvNmdEV3ptQXpycGk1RFFVOCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvNmdEV3ptQXpycGk1RFFVOCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvNmdEV3ptQXpycGk1RFFVOCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvNmdEV3ptQXpycGk1RFFVOCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "33zX3zllJBGY8",
        "url": "https://giphy.com/gifs/funy-33zX3zllJBGY8",
        "slug": "funy-33zX3zllJBGY8",
        "bitly_gif_url": "http://gph.is/1XJQOxM",
        "bitly_url": "http://gph.is/1XJQOxM",
        "embed_url": "https://giphy.com/embed/33zX3zllJBGY8",
        "username": "",
        "source": "https://www.reddit.com/r/gifs/comments/4lr92y/funy/",
        "title": "Elephant Converse GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "https://www.reddit.com/r/gifs/comments/4lr92y/funy/",
        "is_sticker": 0,
        "import_datetime": "2016-05-30 19:50:11",
        "trending_datetime": "2016-06-02 03:00:01",
        "images": {
          "original": {
            "height": "223",
            "width": "280",
            "size": "254777",
            "url": "https://media0.giphy.com/media/33zX3zllJBGY8/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "224253",
            "mp4": "https://media0.giphy.com/media/33zX3zllJBGY8/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "75740",
            "webp": "https://media0.giphy.com/media/33zX3zllJBGY8/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "12",
            "hash": "29e98e795746770b2d944be35d701756"
          },
          "fixed_height": {
            "height": "200",
            "width": "251",
            "size": "207853",
            "url": "https://media0.giphy.com/media/33zX3zllJBGY8/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "58090",
            "mp4": "https://media0.giphy.com/media/33zX3zllJBGY8/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "54390",
            "webp": "https://media0.giphy.com/media/33zX3zllJBGY8/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "251",
            "size": "114606",
            "url": "https://media0.giphy.com/media/33zX3zllJBGY8/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "69576",
            "webp": "https://media0.giphy.com/media/33zX3zllJBGY8/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "126",
            "size": "64654",
            "url": "https://media0.giphy.com/media/33zX3zllJBGY8/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "19328",
            "mp4": "https://media0.giphy.com/media/33zX3zllJBGY8/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "16942",
            "webp": "https://media0.giphy.com/media/33zX3zllJBGY8/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "159",
            "width": "200",
            "size": "148775",
            "url": "https://media0.giphy.com/media/33zX3zllJBGY8/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "39535",
            "mp4": "https://media0.giphy.com/media/33zX3zllJBGY8/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "35156",
            "webp": "https://media0.giphy.com/media/33zX3zllJBGY8/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "159",
            "width": "200",
            "size": "75881",
            "url": "https://media0.giphy.com/media/33zX3zllJBGY8/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "45022",
            "webp": "https://media0.giphy.com/media/33zX3zllJBGY8/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "80",
            "width": "100",
            "size": "45978",
            "url": "https://media0.giphy.com/media/33zX3zllJBGY8/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "13612",
            "mp4": "https://media0.giphy.com/media/33zX3zllJBGY8/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "12144",
            "webp": "https://media0.giphy.com/media/33zX3zllJBGY8/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTMzelgzemxsSkJHWTgmZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWIxMjNhNjE2bmpvMDRvaGNxd212OWJ0d2JkbmdkcWh2NGdjZ3JtbXNzY2JjODJ6MiZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTMzelgzemxsSkJHWTgmZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWIxMjNhNjE2bmpvMDRvaGNxd212OWJ0d2JkbmdkcWh2NGdjZ3JtbXNzY2JjODJ6MiZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTMzelgzemxsSkJHWTgmZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWIxMjNhNjE2bmpvMDRvaGNxd212OWJ0d2JkbmdkcWh2NGdjZ3JtbXNzY2JjODJ6MiZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTMzelgzemxsSkJHWTgmZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWIxMjNhNjE2bmpvMDRvaGNxd212OWJ0d2JkbmdkcWh2NGdjZ3JtbXNzY2JjODJ6MiZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "l46C8AnxYhxNAyM1O",
        "url": "https://giphy.com/gifs/chuber-happy-birthday-magical-unicorns-l46C8AnxYhxNAyM1O",
        "slug": "chuber-happy-birthday-magical-unicorns-l46C8AnxYhxNAyM1O",
        "bitly_gif_url": "http://gph.is/29fSNEN",
        "bitly_url": "http://gph.is/29fSNEN",
        "embed_url": "https://giphy.com/embed/l46C8AnxYhxNAyM1O",
        "username": "chuber",
        "source": "",
        "title": "Happy Birthday GIF by chuber channel",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2016-07-06 03:25:41",
        "trending_datetime": "2016-10-01 06:00:01",
        "images": {
          "original": {
            "height": "270",
            "width": "480",
            "size": "850016",
            "url": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "295290",
            "mp4": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "508586",
            "webp": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "10",
            "hash": "3d987b80e6db55428d5eedfe92c832b7"
          },
          "fixed_height": {
            "height": "200",
            "width": "356",
            "size": "458697",
            "url": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "135719",
            "mp4": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "284410",
            "webp": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "356",
            "size": "282069",
            "url": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "185058",
            "webp": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "178",
            "size": "122728",
            "url": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "37515",
            "mp4": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "85284",
            "webp": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "113",
            "width": "200",
            "size": "149425",
            "url": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "44370",
            "mp4": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "102502",
            "webp": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "113",
            "width": "200",
            "size": "92722",
            "url": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "65244",
            "webp": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "57",
            "width": "100",
            "size": "41920",
            "url": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "13036",
            "mp4": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "31590",
            "webp": "https://media4.giphy.com/media/l46C8AnxYhxNAyM1O/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/chuber/GmiJcdTlt4ug.jpeg",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/chuber/",
          "username": "chuber",
          "display_name": "chuber channel",
          "description": "Can't stop\r\nWon't stop\r\nPlease stop",
          "instagram_url": "https://instagram.com/chuberization",
          "website_url": "https://giphy.com/chuber",
          "is_verified": false
        },
        "analytics_response_payload": "e=Z2lmX2lkPWw0NkM4QW54WWh4TkF5TTFPJmV2ZW50X3R5cGU9R0lGX1RSRU5ESU5HJmNpZD1iMTIzYTYxNm5qbzA0b2hjcXdtdjlidHdiZG5nZHFodjRnY2dybW1zc2NiYzgyejImY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWw0NkM4QW54WWh4TkF5TTFPJmV2ZW50X3R5cGU9R0lGX1RSRU5ESU5HJmNpZD1iMTIzYTYxNm5qbzA0b2hjcXdtdjlidHdiZG5nZHFodjRnY2dybW1zc2NiYzgyejImY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWw0NkM4QW54WWh4TkF5TTFPJmV2ZW50X3R5cGU9R0lGX1RSRU5ESU5HJmNpZD1iMTIzYTYxNm5qbzA0b2hjcXdtdjlidHdiZG5nZHFodjRnY2dybW1zc2NiYzgyejImY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWw0NkM4QW54WWh4TkF5TTFPJmV2ZW50X3R5cGU9R0lGX1RSRU5ESU5HJmNpZD1iMTIzYTYxNm5qbzA0b2hjcXdtdjlidHdiZG5nZHFodjRnY2dybW1zc2NiYzgyejImY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "0OgdJVNjbcIifqSb7U",
        "url": "https://giphy.com/gifs/cat-hug-phone-0OgdJVNjbcIifqSb7U",
        "slug": "cat-hug-phone-0OgdJVNjbcIifqSb7U",
        "bitly_gif_url": "https://gph.is/g/4zG9WMA",
        "bitly_url": "https://gph.is/g/4zG9WMA",
        "embed_url": "https://giphy.com/embed/0OgdJVNjbcIifqSb7U",
        "username": "NGcorpvtc",
        "source": "",
        "title": "Cat Love GIF by NGcorpvtc",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2021-06-02 08:56:14",
        "trending_datetime": "2022-03-08 00:15:11",
        "images": {
          "original": {
            "height": "328",
            "width": "382",
            "size": "1054682",
            "url": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "314889",
            "mp4": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "392008",
            "webp": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "45",
            "hash": "160293c2518225f0aa57cf7242f1cd95"
          },
          "fixed_height": {
            "height": "200",
            "width": "233",
            "size": "371605",
            "url": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "80554",
            "mp4": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "211158",
            "webp": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "233",
            "size": "55048",
            "url": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "31734",
            "webp": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "117",
            "size": "131860",
            "url": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "37564",
            "mp4": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "93028",
            "webp": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "172",
            "width": "200",
            "size": "279771",
            "url": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "67654",
            "mp4": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "182416",
            "webp": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "172",
            "width": "200",
            "size": "42309",
            "url": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "27412",
            "webp": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "86",
            "width": "100",
            "size": "103918",
            "url": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "31610",
            "mp4": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "77378",
            "webp": "https://media2.giphy.com/media/0OgdJVNjbcIifqSb7U/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/NGcorpvtc/DMGgluOLCK1D.png",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/NGcorpvtc/",
          "username": "NGcorpvtc",
          "display_name": "NGcorpvtc",
          "description": "NGcorpVTC is a fashion Brand, and we create this account to make our own gifs and share them the world ;)",
          "instagram_url": "https://instagram.com/ng_corpvtc",
          "website_url": "http://ngcorpvtc.com",
          "is_verified": false
        },
        "analytics_response_payload": "e=Z2lmX2lkPTBPZ2RKVk5qYmNJaWZxU2I3VSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTBPZ2RKVk5qYmNJaWZxU2I3VSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTBPZ2RKVk5qYmNJaWZxU2I3VSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTBPZ2RKVk5qYmNJaWZxU2I3VSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "o47wM5WZfAIzC85oir",
        "url": "https://giphy.com/gifs/slamdisques-matchup-the-thematchup-o47wM5WZfAIzC85oir",
        "slug": "slamdisques-matchup-the-thematchup-o47wM5WZfAIzC85oir",
        "bitly_gif_url": "https://gph.is/g/4gz2mBX",
        "bitly_url": "https://gph.is/g/4gz2mBX",
        "embed_url": "https://giphy.com/embed/o47wM5WZfAIzC85oir",
        "username": "slamdisques",
        "source": "",
        "title": "Party Love GIF by Slam Disques",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2021-12-14 21:56:54",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "236",
            "width": "480",
            "size": "2861075",
            "url": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "196670",
            "mp4": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "411842",
            "webp": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "57",
            "hash": "340c0aaf2dd307366c45c3c9249e8eec"
          },
          "fixed_height": {
            "height": "200",
            "width": "407",
            "size": "1367137",
            "url": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "131985",
            "mp4": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "288602",
            "webp": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "407",
            "size": "196306",
            "url": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "107278",
            "webp": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "204",
            "size": "427543",
            "url": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "45198",
            "mp4": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "108056",
            "webp": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "98",
            "width": "200",
            "size": "398162",
            "url": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "45488",
            "mp4": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "105626",
            "webp": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "98",
            "width": "200",
            "size": "59147",
            "url": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "33528",
            "webp": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "49",
            "width": "100",
            "size": "123191",
            "url": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "17674",
            "mp4": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "43526",
            "webp": "https://media4.giphy.com/media/o47wM5WZfAIzC85oir/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/slamdisques/cudEA2cF42oK.png",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/slamdisques/",
          "username": "slamdisques",
          "display_name": "Slam Disques",
          "description": "",
          "instagram_url": "https://instagram.com/slamdisques",
          "website_url": "http://www.slamdisques.com/slamdisques/",
          "is_verified": false
        },
        "analytics_response_payload": "e=Z2lmX2lkPW80N3dNNVdaZkFJekM4NW9pciZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPW80N3dNNVdaZkFJekM4NW9pciZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPW80N3dNNVdaZkFJekM4NW9pciZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPW80N3dNNVdaZkFJekM4NW9pciZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "5K7ngCtszoxxbaBieC",
        "url": "https://giphy.com/gifs/HollerStudios-animation-reaction-gif-holler-studios-5K7ngCtszoxxbaBieC",
        "slug": "HollerStudios-animation-reaction-gif-holler-studios-5K7ngCtszoxxbaBieC",
        "bitly_gif_url": "https://gph.is/g/EBx7rqG",
        "bitly_url": "https://gph.is/g/EBx7rqG",
        "embed_url": "https://giphy.com/embed/5K7ngCtszoxxbaBieC",
        "username": "HollerStudios",
        "source": "",
        "title": "Happy Lets Go GIF by Holler Studios",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2023-03-04 22:52:44",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "480",
            "width": "480",
            "size": "5342753",
            "url": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "963805",
            "mp4": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "1046014",
            "webp": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "54",
            "hash": "ae76f5d7384aced6b9fb16c6cbba4964"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "634044",
            "url": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "146929",
            "mp4": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "172774",
            "webp": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "90681",
            "url": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "49650",
            "webp": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "214645",
            "url": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "49179",
            "mp4": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "68346",
            "webp": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "634044",
            "url": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "146929",
            "mp4": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "172774",
            "webp": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "90681",
            "url": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "49650",
            "webp": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "214645",
            "url": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "49179",
            "mp4": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "68346",
            "webp": "https://media0.giphy.com/media/5K7ngCtszoxxbaBieC/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/HollerStudios/1l8ZK6CbbUM8.gif",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/HollerStudios/",
          "username": "HollerStudios",
          "display_name": "Holler Studios",
          "description": "From Stickers to Stories.\r\nAll content ©2023 Holler Technologies, Inc.",
          "instagram_url": "https://instagram.com/hollerstudios",
          "website_url": "http://www.hollerstudios.com/",
          "is_verified": false
        },
        "analytics_response_payload": "e=Z2lmX2lkPTVLN25nQ3Rzem94eGJhQmllQyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTVLN25nQ3Rzem94eGJhQmllQyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTVLN25nQ3Rzem94eGJhQmllQyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTVLN25nQ3Rzem94eGJhQmllQyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "12pJ8OxSWwO86Y",
        "url": "https://giphy.com/gifs/12pJ8OxSWwO86Y",
        "slug": "12pJ8OxSWwO86Y",
        "bitly_gif_url": "http://gph.is/2fuwMbi",
        "bitly_url": "http://gph.is/2fuwMbi",
        "embed_url": "https://giphy.com/embed/12pJ8OxSWwO86Y",
        "username": "thaliadejong",
        "source": "https://vimeo.com/123117864",
        "title": "Make It Rain Dog GIF by Thalia de Jong",
        "rating": "g",
        "content_url": "",
        "source_tld": "vimeo.com",
        "source_post_url": "https://vimeo.com/123117864",
        "is_sticker": 0,
        "import_datetime": "2017-09-18 12:35:57",
        "trending_datetime": "2019-04-28 13:15:02",
        "images": {
          "original": {
            "height": "480",
            "width": "480",
            "size": "2458868",
            "url": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "359401",
            "mp4": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "686980",
            "webp": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "44",
            "hash": "74a49ca645bace12490be08bc5608639"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "450066",
            "url": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "76813",
            "mp4": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "210800",
            "webp": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "88538",
            "url": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "53132",
            "webp": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "169614",
            "url": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "28711",
            "mp4": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "78278",
            "webp": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "450066",
            "url": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "76813",
            "mp4": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "210800",
            "webp": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "88538",
            "url": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "53132",
            "webp": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "169614",
            "url": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "28711",
            "mp4": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "78278",
            "webp": "https://media0.giphy.com/media/12pJ8OxSWwO86Y/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/thaliadejong/fmZ3fJo2MYEV.jpg",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/thaliadejong/",
          "username": "thaliadejong",
          "display_name": "Thalia de Jong",
          "description": "Dutch film maker perfectionist who still can’t believe that being a grown up means being able to walk into a candy shop and just buy the candy. Just. Buy. All. The. Candy. It’s the best! \r\n\r\nRepresented by Cake F ilm & Photography",
          "instagram_url": "https://instagram.com/@thaliadejong",
          "website_url": "http://www.thaliadejong.nl/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTEycEo4T3hTV3dPODZZJmV2ZW50X3R5cGU9R0lGX1RSRU5ESU5HJmNpZD1iMTIzYTYxNm5qbzA0b2hjcXdtdjlidHdiZG5nZHFodjRnY2dybW1zc2NiYzgyejImY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTEycEo4T3hTV3dPODZZJmV2ZW50X3R5cGU9R0lGX1RSRU5ESU5HJmNpZD1iMTIzYTYxNm5qbzA0b2hjcXdtdjlidHdiZG5nZHFodjRnY2dybW1zc2NiYzgyejImY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTEycEo4T3hTV3dPODZZJmV2ZW50X3R5cGU9R0lGX1RSRU5ESU5HJmNpZD1iMTIzYTYxNm5qbzA0b2hjcXdtdjlidHdiZG5nZHFodjRnY2dybW1zc2NiYzgyejImY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTEycEo4T3hTV3dPODZZJmV2ZW50X3R5cGU9R0lGX1RSRU5ESU5HJmNpZD1iMTIzYTYxNm5qbzA0b2hjcXdtdjlidHdiZG5nZHFodjRnY2dybW1zc2NiYzgyejImY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "2prRLwTlSggGREF3RW",
        "url": "https://giphy.com/gifs/spiritawards-independent-spirit-awards-indie-2prRLwTlSggGREF3RW",
        "slug": "spiritawards-independent-spirit-awards-indie-2prRLwTlSggGREF3RW",
        "bitly_gif_url": "https://gph.is/g/4g2QG19",
        "bitly_url": "https://gph.is/g/4g2QG19",
        "embed_url": "https://giphy.com/embed/2prRLwTlSggGREF3RW",
        "username": "spiritawards",
        "source": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "title": "T Shirt Riverdale GIF by Film Independent Spirit Awards",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.youtube.com",
        "source_post_url": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "is_sticker": 0,
        "import_datetime": "2024-02-25 22:49:49",
        "trending_datetime": "2024-02-25 22:56:23",
        "images": {
          "original": {
            "height": "262",
            "width": "480",
            "size": "3585015",
            "url": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "468503",
            "mp4": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "689036",
            "webp": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "68",
            "hash": "8ece912d1af37d8495f7572d68370889"
          },
          "fixed_height": {
            "height": "200",
            "width": "366",
            "size": "1843143",
            "url": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "247292",
            "mp4": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "457784",
            "webp": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "366",
            "size": "166735",
            "url": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "107562",
            "webp": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "183",
            "size": "718913",
            "url": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "92539",
            "mp4": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "168780",
            "webp": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "109",
            "width": "200",
            "size": "841973",
            "url": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "106374",
            "mp4": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "192874",
            "webp": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "109",
            "width": "200",
            "size": "79432",
            "url": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "41936",
            "webp": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "55",
            "width": "100",
            "size": "220929",
            "url": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "37468",
            "mp4": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "68640",
            "webp": "https://media1.giphy.com/media/2prRLwTlSggGREF3RW/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/spiritawards/Ruc6GB0z1iwr.png",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/spiritawards/",
          "username": "spiritawards",
          "display_name": "Film Independent Spirit Awards",
          "description": "The Film Independent Spirit Awards is the annual celebration of the independent, artist-driven films that bring a unique vision to filmmaking. Watch Live Thursday 4/22 at 10pm on IFC.",
          "instagram_url": "https://instagram.com/filmindependent",
          "website_url": "https://www.filmindependent.org/spirit-awards/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTJwclJMd1RsU2dnR1JFRjNSVyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTJwclJMd1RsU2dnR1JFRjNSVyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTJwclJMd1RsU2dnR1JFRjNSVyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTJwclJMd1RsU2dnR1JFRjNSVyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "UTkm6euG3wabBiUeQu",
        "url": "https://giphy.com/gifs/moodman-UTkm6euG3wabBiUeQu",
        "slug": "moodman-UTkm6euG3wabBiUeQu",
        "bitly_gif_url": "https://gph.is/g/ZYlGKLe",
        "bitly_url": "https://gph.is/g/ZYlGKLe",
        "embed_url": "https://giphy.com/embed/UTkm6euG3wabBiUeQu",
        "username": "",
        "source": "",
        "title": "Tom And Jerry Reaction GIF by MOODMAN",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2020-03-11 00:56:30",
        "trending_datetime": "2021-02-08 10:45:09",
        "images": {
          "original": {
            "height": "360",
            "width": "540",
            "size": "584866",
            "url": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "289623",
            "mp4": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "577956",
            "webp": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "147",
            "hash": "dae35b12425a35a8dce557e1a3d3d266"
          },
          "fixed_height": {
            "height": "200",
            "width": "300",
            "size": "354773",
            "url": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "130917",
            "mp4": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "268100",
            "webp": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "300",
            "size": "55719",
            "url": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "43094",
            "webp": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "150",
            "size": "145301",
            "url": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "44733",
            "mp4": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "93190",
            "webp": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "133",
            "width": "200",
            "size": "198711",
            "url": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "71210",
            "mp4": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "160606",
            "webp": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "133",
            "width": "200",
            "size": "29617",
            "url": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "25680",
            "webp": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "67",
            "width": "100",
            "size": "83095",
            "url": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "24944",
            "mp4": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "47826",
            "webp": "https://media2.giphy.com/media/UTkm6euG3wabBiUeQu/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVVUa202ZXVHM3dhYkJpVWVRdSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVVUa202ZXVHM3dhYkJpVWVRdSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVVUa202ZXVHM3dhYkJpVWVRdSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVVUa202ZXVHM3dhYkJpVWVRdSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "EPXLDjorryEUtEtQde",
        "url": "https://giphy.com/gifs/spiritawards-independent-spirit-awards-indie-EPXLDjorryEUtEtQde",
        "slug": "spiritawards-independent-spirit-awards-indie-EPXLDjorryEUtEtQde",
        "bitly_gif_url": "https://gph.is/g/aj2Loy9",
        "bitly_url": "https://gph.is/g/aj2Loy9",
        "embed_url": "https://giphy.com/embed/EPXLDjorryEUtEtQde",
        "username": "spiritawards",
        "source": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "title": "Will Ferrell Swag GIF by Film Independent Spirit Awards",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.youtube.com",
        "source_post_url": "https://www.youtube.com/watch?v=dSpl10BIgaI",
        "is_sticker": 0,
        "import_datetime": "2024-02-25 22:48:31",
        "trending_datetime": "2024-02-25 22:53:03",
        "images": {
          "original": {
            "height": "263",
            "width": "480",
            "size": "2083350",
            "url": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "421904",
            "mp4": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "979044",
            "webp": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "32",
            "hash": "69c51ede2a128b65b6f8419aae693abe"
          },
          "fixed_height": {
            "height": "200",
            "width": "365",
            "size": "1118134",
            "url": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "230616",
            "mp4": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "651762",
            "webp": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "365",
            "size": "230882",
            "url": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "142862",
            "webp": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "183",
            "size": "330232",
            "url": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "75429",
            "mp4": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "227140",
            "webp": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "110",
            "width": "200",
            "size": "365029",
            "url": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "85344",
            "mp4": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "256896",
            "webp": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "110",
            "width": "200",
            "size": "82209",
            "url": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "52972",
            "webp": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "55",
            "width": "100",
            "size": "107160",
            "url": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "26164",
            "mp4": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "88182",
            "webp": "https://media1.giphy.com/media/EPXLDjorryEUtEtQde/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/spiritawards/Ruc6GB0z1iwr.png",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/spiritawards/",
          "username": "spiritawards",
          "display_name": "Film Independent Spirit Awards",
          "description": "The Film Independent Spirit Awards is the annual celebration of the independent, artist-driven films that bring a unique vision to filmmaking. Watch Live Thursday 4/22 at 10pm on IFC.",
          "instagram_url": "https://instagram.com/filmindependent",
          "website_url": "https://www.filmindependent.org/spirit-awards/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPUVQWExEam9ycnlFVXRFdFFkZSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUVQWExEam9ycnlFVXRFdFFkZSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUVQWExEam9ycnlFVXRFdFFkZSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUVQWExEam9ycnlFVXRFdFFkZSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "QTAVEex4ANH1pcdg16",
        "url": "https://giphy.com/gifs/theoffice-the-office-tv-scotts-tots-QTAVEex4ANH1pcdg16",
        "slug": "theoffice-the-office-tv-scotts-tots-QTAVEex4ANH1pcdg16",
        "bitly_gif_url": "https://gph.is/g/aXLRAxW",
        "bitly_url": "https://gph.is/g/aXLRAxW",
        "embed_url": "https://giphy.com/embed/QTAVEex4ANH1pcdg16",
        "username": "theoffice",
        "source": "",
        "title": "Excited Season 6 GIF by The Office",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2020-12-04 16:25:39",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "400",
            "width": "480",
            "size": "1624233",
            "url": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "398003",
            "mp4": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "434560",
            "webp": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "25",
            "hash": "482190a0c1e806bdd8c15d755bac5db4"
          },
          "fixed_height": {
            "height": "200",
            "width": "240",
            "size": "373580",
            "url": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "83471",
            "mp4": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "137010",
            "webp": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "240",
            "size": "107146",
            "url": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "56872",
            "webp": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "120",
            "size": "129586",
            "url": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "32690",
            "mp4": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "59900",
            "webp": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "167",
            "width": "200",
            "size": "320221",
            "url": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "66612",
            "mp4": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "111326",
            "webp": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "167",
            "width": "200",
            "size": "74817",
            "url": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "43604",
            "webp": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "84",
            "width": "100",
            "size": "100055",
            "url": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "26517",
            "mp4": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "48804",
            "webp": "https://media3.giphy.com/media/QTAVEex4ANH1pcdg16/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media0.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media0.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPVFUQVZFZXg0QU5IMXBjZGcxNiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVFUQVZFZXg0QU5IMXBjZGcxNiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVFUQVZFZXg0QU5IMXBjZGcxNiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVFUQVZFZXg0QU5IMXBjZGcxNiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "9c6IR5ATM0Qoav1BeN",
        "url": "https://giphy.com/gifs/netflix-money-broke-is-this-about-9c6IR5ATM0Qoav1BeN",
        "slug": "netflix-money-broke-is-this-about-9c6IR5ATM0Qoav1BeN",
        "bitly_gif_url": "https://gph.is/g/aKpBwb8",
        "bitly_url": "https://gph.is/g/aKpBwb8",
        "embed_url": "https://giphy.com/embed/9c6IR5ATM0Qoav1BeN",
        "username": "netflix",
        "source": "",
        "title": "Money Job GIF by NETFLIX",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2023-07-28 00:44:15",
        "trending_datetime": "2024-02-23 19:41:08",
        "images": {
          "original": {
            "height": "270",
            "width": "480",
            "size": "2803435",
            "url": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/giphy.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            "mp4_size": "163156",
            "mp4": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/giphy.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            "webp_size": "588440",
            "webp": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/giphy.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            "frames": "49",
            "hash": "53eb1df7639c049540203af86d08fb5e"
          },
          "fixed_height": {
            "height": "200",
            "width": "356",
            "size": "1167843",
            "url": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.gif&ct=g",
            "mp4_size": "103871",
            "mp4": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            "webp_size": "367670",
            "webp": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "356",
            "size": "155210",
            "url": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            "webp_size": "96228",
            "webp": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "178",
            "size": "393089",
            "url": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/100.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.gif&ct=g",
            "mp4_size": "39544",
            "mp4": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/100.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            "webp_size": "132022",
            "webp": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/100.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100.webp&ct=g"
          },
          "fixed_width": {
            "height": "113",
            "width": "200",
            "size": "434966",
            "url": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            "mp4_size": "42523",
            "mp4": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            "webp_size": "151228",
            "webp": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "113",
            "width": "200",
            "size": "64597",
            "url": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200w_d.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            "webp_size": "39174",
            "webp": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/200w_d.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "57",
            "width": "100",
            "size": "139978",
            "url": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/100w.gif?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            "mp4_size": "16762",
            "mp4": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/100w.mp4?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            "webp_size": "56284",
            "webp": "https://media3.giphy.com/media/9c6IR5ATM0Qoav1BeN/100w.webp?cid=b123a616njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2&ep=v1_gifs_trending&rid=100w.webp&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/netflix/4oBuhqPAhFem.png",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/netflix/",
          "username": "netflix",
          "display_name": "NETFLIX",
          "description": "See What's Next in entertainment and Netflix original series, movies, TV, docs, and comedies. You can stream Netflix anytime, anywhere, on any device.",
          "instagram_url": "",
          "website_url": "http://netflix.com",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTljNklSNUFUTTBRb2F2MUJlTiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTljNklSNUFUTTBRb2F2MUJlTiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTljNklSNUFUTTBRb2F2MUJlTiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTljNklSNUFUTTBRb2F2MUJlTiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YjEyM2E2MTZuam8wNG9oY3F3bXY5YnR3YmRuZ2RxaHY0Z2Nncm1tc3NjYmM4MnoyJmN0PWc&action_type=SENT"
          }
        }
      }
    ],
      "meta": {
      "status": 200,
        "msg": "OK",
        "response_id": "njo04ohcqwmv9btwbdngdqhv4gcgrmmsscbc82z2"
    },
      "pagination": {
      "total_count": 3062,
        "count": 25,
        "offset": 0
      }
    })
  }

}


