'use client'
import React, { ReactElement } from 'react'
import { ArchiveBlock as ArchiveBlockType } from '@types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import getLinkUrl from '@utilities/getLinkUrl'
import Grid from '@components/atoms/Grid'
import Media from '@components/atoms/Media'
import Heading from '@components/atoms/Heading'
import RichText from '@components/atoms/RichText'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

type ArchiveBlockProps = ArchiveBlockType & {
	className?: string
}

function ArchiveBlock({
	blockType,
	archiveBlockFields,
	className,
}: ArchiveBlockProps): ReactElement | null {
	if (!archiveBlockFields) return null
	const {
		introContent,
		id,
		relationTo,
		populateBy,
		limit,
		populatedDocs,
		populatedDocsTotal,
		selectedDocs,
		categories,
	} = archiveBlockFields

	const classes = clsx(blockType, className, 'flex flex-col gap-5')

	return (
		<div className={classes}>
			{introContent && <RichText content={introContent} />}

		</div>
	)
}

export default ArchiveBlock
export type { ArchiveBlockProps }
