'use strict'

// export class PlayVideo {
//   constructor(selectVideo, selectPlayButton) {
//     this.videoPlayer = document.getElementById(selectVideo)
//     this.buttonPlayVideo = document.getElementById(selectPlayButton)
//     this.init()
//     this.endPlayVideo()
//   }

//   init() {
//     this.buttonPlayVideo.addEventListener('click', () => {
//       this.videoPlayer.controls = true
//       this.videoPlayer.play()
//       this.buttonPlayVideo.style.display = 'none'
//     })
//   }

//   endPlayVideo() {
//     this.videoPlayer.addEventListener('ended', () => {
//       this.buttonPlayVideo.style.display = 'block'
//       this.videoPlayer.removeAttribute('controls')
//     })
//   }
// }

export class PlayVideo {
  constructor(selectVideo, selectPlayButton) {
    this.videoPlayer = document.getElementById(selectVideo)
    this.buttonPlayVideo = document.getElementById(selectPlayButton)
    this.init()
    this.endPlayVideo()
  }

  init() {
    if (!this.videoPlayer || !this.buttonPlayVideo) {
      throw new Error('Video or Play Button element not found')
    }
    this.buttonPlayVideo.addEventListener('click', () => {
      this.videoPlayer.controls = true
      this.videoPlayer.play()
      this.buttonPlayVideo.style.display = 'none'
    })
  }

  endPlayVideo() {
    this.videoPlayer.addEventListener('ended', () => {
      this.buttonPlayVideo.style.display = 'block'
      this.videoPlayer.removeAttribute('controls')
    })
  }
}
