import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IVideoElement } from './video.interface'

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null)
	const bufferRef = useRef<HTMLDivElement>(null)
	const fullScreenRef = useRef<HTMLButtonElement>(null)
	const controlsRef = useRef<HTMLDivElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)
	const [isVolume, setIsVolume] = useState(true)

	const currentSecond = 8
	const isPlayCircle = currentSecond === currentTime

	const toggleVideo = useCallback(() => {
		if (isPlaying) {
			videoRef.current?.pause()
			setIsPlaying(false)
		} else {
			videoRef.current?.play()
			setIsPlaying(true)
		}
	}, [isPlaying])

	const toggleVolume = () => {
		const video = videoRef.current
		if (!video) return

		if (video.volume === 1) {
			video.volume = 0
			setIsVolume(false)
		} else {
			video.volume = 1
			setIsVolume(true)
		}
	}

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 10
	}

	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10
	}

	const fullScreen = () => {
		const video = videoRef.current
		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullscreen) {
			video.mozRequestFullscreen()
		} else if (video.webKitRequestFullscreen) {
			video.webKitRequestFullscreen()
		}
	}

	const onSeekToPosition = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const { width, left } = e.currentTarget.getBoundingClientRect()
		const clickedPos = (e.clientX - left) / width
		seekToPosition(clickedPos)
	}

	const seekToPosition = (pos: number) => {
		if (pos < 0 || pos > 1) return

		const durationMs = videoRef.current!.duration * 1000 || 0

		const newElapsedMs = durationMs * pos
		const newTimeSec = newElapsedMs / 1000
		if (videoRef.current) {
			videoRef.current.currentTime = newTimeSec
		}
	}

	useEffect(() => {
		const originalDuration = videoRef.current?.duration
		if (originalDuration) {
			setVideoTime(originalDuration)
		}
	}, [videoRef.current?.duration])

	useEffect(() => {
		const video = videoRef.current
		if (!video) return
		const updateBuffer = () => {
			if (!video.buffered) return
			const bufferedEnd =
				video.buffered.length && video.buffered.end(video.buffered.length - 1)
			const duration = video.duration
			if (bufferRef && bufferRef.current && duration > 0) {
				bufferRef.current!.style.width = (bufferedEnd / duration) * 100 + '%'
			}
		}
		video.addEventListener('loadeddata', updateBuffer)
		video.addEventListener('progress', updateBuffer)
		video.addEventListener('timeupdate', updateBuffer)

		return () => {
			video.removeEventListener('loadeddata', updateBuffer)
			video.removeEventListener('progress', updateBuffer)
			video.removeEventListener('timeupdate', updateBuffer)
		}
	}, [videoRef.current])

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const updateProgress = () => {
			const originalDuration = videoRef.current?.duration
			setCurrentTime(video.currentTime)
			if (originalDuration) {
				setProgress((video.currentTime / originalDuration) * 100)
			}
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoTime])

	/*
	useEffect(() => {
		if (isPlaying) setIsPlaying(false)
	}, [videoTime])

	useEffect(() => {
		const endProgress = 100
		if (progress === endProgress) setIsPlaying(false)
	}, [progress])
*/

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					revert()
					break
				case 'm':
					toggleVolume()
					break
				case ' ':
					{
						e.preventDefault()
						toggleVideo()
					}
					break
				/*				case 'f':
					fullScreen()
					break*/
				default:
					return
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])

	return useMemo(
		() => ({
			videoRef,
			bufferRef,
			fullScreenRef,
			controlsRef,
			actions: {
				fullScreen,
				revert,
				forward,
				toggleVideo,
				toggleVolume,
				onSeekToPosition,
			},
			video: {
				isPlaying,
				currentTime,
				progress,
				videoTime,
				isVolume,
				currentSecond,
				isPlayCircle,
			},
		}),
		[
			isPlaying,
			currentTime,
			toggleVolume,
			progress,
			videoTime,
			toggleVideo,
			isVolume,
			currentSecond,
		]
	)
}
