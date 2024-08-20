import clsx from 'clsx'
import React, { ReactElement, ReactNode } from 'react'

interface CorridorProps {
	className?: string
	children?: ReactNode
}

function Corridor({ children, className }: CorridorProps): ReactElement {
	const classes = clsx(
		'mx-auto w-full max-w-[calc(100vw-4rem)]',
		'tablet:max-w-[calc(100vw-5rem)]',
		'laptop:max-w-[calc(100vw-12rem)]',
		'desktop:max-w-[86.25rem]',
		className
	)

	return <div className={classes}>{children}</div>
}

export default Corridor
export type { CorridorProps }
