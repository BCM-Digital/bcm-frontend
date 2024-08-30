'use client'
import { Contact, Header } from '@types'
import clsx from 'clsx'
import { Fragment, ReactElement, useCallback, useEffect, useState } from 'react'
import { useScrollInfo } from '@faceless-ui/scroll-info'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '@components/atoms/Logo'
import PrimaryNavigation from '@components/organisms/PrimaryNavigation'
import MobileNavigation from '@components/organisms/MobileNavigation'
import Hamburger from '@components/atoms/Hamburger'
import MenuIcon from '@components/atoms/MenuIcon'
import ButtonGroup from '@components/atoms/ButtonGroup'

type SiteHeaderProps = {
	header: Header
	contact: Contact
}

function SiteHeader({ header, contact }: SiteHeaderProps): ReactElement {
	const scrollInfo = useScrollInfo()
	const route = usePathname()
	const [showHeader, setShowHeader] = useState<boolean>(true)
	const { mainMenu } = header
	const { socialMedia, contactDetails } = contact
	/**
	 * Handle toggling mobile navigation
	 */
	const [burgerOpen, setBurgerOpen] = useState(false)

	const toggleBurger = useCallback(
		() => setBurgerOpen((open) => !open),
		[setBurgerOpen]
	)

	// Close mobile nav on page change
	useEffect(() => {
		const timeout = setTimeout(() => setBurgerOpen(false), 50)
		return () => clearTimeout(timeout)
	}, [route, setBurgerOpen])

	useEffect(() => {
		const { yDirection, y } = scrollInfo

		if (y >= 82) {
			if (yDirection === 'up') {
				setShowHeader(true)
			} else {
				setShowHeader(false)
			}
		} else {
			setShowHeader(true)
		}
	}, [scrollInfo, setShowHeader])

	useEffect(() => {
		if (burgerOpen) {
			document.body.classList.add('h-screen', 'overflow-hidden')
		} else {
			document.body.classList.remove('h-screen', 'overflow-hidden')
		}
	}, [burgerOpen])

	//
	const classes = clsx(
		'site-header  flex flex-row items-center z-90 sticky top-0 bg-white py-5'
	)

	return (
		<AnimatePresence>
			<Fragment>
				<motion.header
					animate={burgerOpen ? 'open' : 'closed'}
					id="site-header"
					className={classes}
				>
					<div className="flex w-full flex-row items-center justify-between">
						<Logo className="text-dark" />
						<div className="flex flex-row items-center justify-end space-x-4 tablet-landscape:justify-start tablet-landscape:space-x-6 laptop:space-x-10">
							<div className="flex items-center space-x-4">
								{mainMenu &&
									mainMenu.menuItem &&
									mainMenu.menuItem.length > 0 && <MenuIcon />}
							</div>
						</div>
					</div>
				</motion.header>
				{mainMenu && mainMenu.menuItem && <MobileNavigation menu={mainMenu} />}
			</Fragment>
		</AnimatePresence>
	)
}

export default SiteHeader
export type { SiteHeaderProps }
