import clsx from 'clsx'
import { CSSProperties, ReactElement, ReactNode } from 'react'

type MainProps = {
	id?: string
	className?: string
	style?: CSSProperties
	children?: ReactNode
}

function Main({
	id = 'main',
	className,
	children,
	style,
}: MainProps): ReactElement {
	const classes = clsx('main py-20 tablet-landscape:py-24 laptop:py-30', className)

	return (
		<main style={style} id={id} className={classes}>
			{children}
		</main>
	)
}

export default Main
export type { MainProps }
