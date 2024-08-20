import type { Metadata } from 'next'
import { Poppins, Lora  } from 'next/font/google'
import '@styles/globals.css'
import { ReactNode } from 'react'
import clsx from 'clsx'
import GoogleAnalytics from '@components/atoms/GoogleAnalytics'
import GoogleTagManager from '@components/atoms/GoogleTagManager'
import Providers from '@providers'
import { fetchGlobals } from '@graphql'
import { mergeOpenGraph } from '@utilities/mergeOpenGraph'
import SiteHeader from '@components/organisms/SiteHeader'
import IconSprite from '@components/atoms/IconSprite'

import SiteFooter from '@components/organisms/SiteFooter'

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['300', '400', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	preload: true,
	display: 'swap',
})

const lora = Lora({
	variable: '--font-lora',
	weight: 'variable',
	subsets: ['latin'],
	preload: true,
	display: 'swap',
})



export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || ''),
	icons: {
		icon: '/images/favicon.ico',
		// shortcut: '/shortcut-icon.png',
		apple: '/images/apple-touch-icon.png',
		other: {
			rel: 'apple-touch-icon',
			url: '/apple-touch-icon.png',
		},
	},
	openGraph: mergeOpenGraph(),
}

export default async function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	const { header, contact, footer } = await fetchGlobals()

	const classes = clsx(
		'relative z-10 text-dark font-body overscroll-y-none overflow-x-hidden antialiased',
		poppins.variable,
		lora.variable
	)
	return (
		<html
			className=""
			lang="en"
		>
			<head>
				<GoogleAnalytics />
			</head>
			<GoogleTagManager />
			<body className={classes}>
				<Providers>
					<IconSprite />
					<SiteHeader header={header} contact={contact}/>
					{children}
					<SiteFooter contact={contact} footer={footer}/>
				</Providers>
			</body>
		</html>
	)
}
