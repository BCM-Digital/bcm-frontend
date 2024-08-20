'use client'

import Nav from '@components/atoms/Nav'
import { ReactElement } from 'react'
import { MainMenu as MainMenuType, SocialMedia } from '@types'
import clsx from 'clsx'
import MainMenu from '@components/molecules/MainMenu'
import SocialMediaGroup from '@components/molecules/SocialMediaGroup'
import Corridor from '@components/atoms/Corridor'
import useMobileMenuAnimation from '@hooks/useMobileMenuAnimation'

type MobileNavigationProps = {
	menu: MainMenuType
	className?: string
	socialMedia?: SocialMedia
	open: boolean
}

function MobileNavigation({
	menu,
	socialMedia,
	className,
	open = false,
}: MobileNavigationProps): ReactElement | null {
	const classes = clsx(
		'mobile-menu fixed inset-0 z-80 bg-white flex flex-col justify-end pb-17',
		className
	)

	

	return menu.menuItem && menu.menuItem.length ? (
		<div>
			{' '}
			<div
				className={classes}
				style={{
					clipPath: 'circle(30px at calc(100% - 65px) 65px)',
					pointerEvents: 'none',
					visibility: 'hidden',
					opacity: 0,
				}}
			>
				<Corridor className="space-y-16">
					<Nav ariaLabel="primary-menu" id="primary-menu">
						<MainMenu menu={menu} />
					</Nav>
					{socialMedia && (
						<div className="tablet-landscape:hidden">
							<SocialMediaGroup socialLinks={socialMedia.socialLinks} />
						</div>
					)}
				</Corridor>
			</div>
		</div>
	) : null
}

export default MobileNavigation
export type { MobileNavigationProps }
