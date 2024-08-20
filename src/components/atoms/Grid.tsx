import clsx from 'clsx'
import React, { ReactElement, ReactNode } from 'react'

type GridProps = {
	className?: string
	children?: ReactNode
}

function Grid({ children, className }: GridProps): ReactElement {
	const classes = clsx(
		'grid grid-cols-4 gap-8 tablet:grid-cols-8 tablet:gap-x-8 tablet-landscape:grid-cols-12 tablet-landscape:gap-y-8',
		className
	)

	return <div className={classes}>{children}</div>
}

export default Grid
export type { GridProps }
