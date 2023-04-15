export interface IVideoPlayer {
	videoSource: string | null
	slug: string
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void
	mozRequestFullscreen?: () => void
	webKitRequestFullscreen?: () => void
}
