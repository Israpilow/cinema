export interface IVideoPlayer {
	videoSource: string
	slug: string
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void
	mozRequestFullscreen?: () => void
	webKitRequestFullscreen?: () => void
}
