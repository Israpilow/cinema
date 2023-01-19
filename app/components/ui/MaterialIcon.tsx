import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'
import { TypeMaterialIconName } from 'store/types/icons.types'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
