import cn from 'classnames'
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { useAuth } from '../../../hooks/useAuth'
import MaterialIcon from '../MaterialIcon'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import styles from './VideoPlayer.module.scss'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.interface'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => {
	const { actions, video, videoRef, bufferRef, wrapperRef } = useVideo()
	const { user } = useAuth()
	const isVideo = videoSource?.includes('.mp4')

	return (
		<div
			className={cn(styles.wrapper, {
				'h-96': !user,
			})}
			ref={wrapperRef}
		>
			<>
				{user ? (
					/*					isVideo ? (*/
					<>
						<video
							ref={videoRef}
							className={styles.video}
							preload="metadata"
							onClick={actions.toggleVideo}
							src={`${videoSource}#t=${video.currentSecond}`}
						></video>
						{video.isPlayCircle ? (
							<div className={styles.iconPlay} onClick={actions.toggleVideo}>
								<MaterialIcon name="MdPlayCircle" />
							</div>
						) : (
							<CSSTransition
								in={video.isControls}
								classNames="controls-animation"
								timeout={300}
								unmountOnExit
							>
								<div>
									<div
										className={styles.progressBarContainer}
										onClick={actions.onSeekToPosition}
									>
										<div
											style={{ width: `${video.progress}%` }}
											className={styles.progressBar}
										/>
										<div className={styles.bufferProgressBar} ref={bufferRef} />
									</div>

									<div className={cn(styles.controls)}>
										<div>
											<button id="myButton" onClick={actions.revert}>
												<MaterialIcon name="MdHistory" />
											</button>

											<button
												onClick={actions.toggleVideo}
												className={styles.playButton}
												id="#fs-toggle"
											>
												<MaterialIcon
													name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
												/>
											</button>

											<button onClick={actions.forward}>
												<MaterialIcon name="MdUpdate" />
											</button>
											<button onClick={actions.toggleVolume}>
												<MaterialIcon
													name={video.isVolume ? 'MdVolumeUp' : 'MdVolumeOff'}
												/>
											</button>
											<div className={styles.timeControls}>
												<p className={styles.controlsTime}>
													{Math.floor(video.currentTime / 60) +
														':' +
														('0' + Math.floor(video.currentTime % 60)).slice(
															-2
														)}
												</p>
												<p> / </p>
												<p className={styles.controlsTime}>
													{Math.floor(video.videoTime / 60) +
														':' +
														('0' + Math.floor(video.videoTime % 60)).slice(-2)}
												</p>
											</div>
										</div>
										<div>
											<div>
												<MaterialIcon name="MdFullscreen" />
											</div>
										</div>
									</div>
								</div>
							</CSSTransition>
						)}
					</>
				) : (
					/*					) : (
						<AuthPlaceholder text="Expect video to be added soon" />
					)*/
					<AuthPlaceholder slug={slug} />
				)}
			</>
		</div>
	)
}

export default VideoPlayer
