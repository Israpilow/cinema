import { FC } from 'react'

const SubHeading: FC<{ title: string }> = ({ title }) => {
	return <h1 className={`text-white mb-5 font-semibold text-xl`}>{title}</h1>
}

export default SubHeading
