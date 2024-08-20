import { ReactElement } from 'react'
import {
	CallToActionBlock as CallToActionBlockType,
	CardsBlock as CardsBlockType, ContactFormBlock as ContactFormBlockType,
	ImageSliderBlock as ImageSliderBlockType,
	MediaAndContentBlock as MediaAndContentBlockType,
	MediaBlock as MediaBlockType, QuestionsBlock as QuestionsBlockType, TabsBlock as TabsBlockType,
} from '@types'
import dynamic from 'next/dynamic'
import ImageSliderBlock from '@components/organisms/ImageSliderBlock'


const CallToActionBlock = dynamic( ()=> import('@components/organisms/CallToActionBlock'))
const CardsBlock = dynamic( ()=> import('@components/organisms/CardsBlock'))
const ContactFormBlock = dynamic( ()=> import('@components/organisms/ContactFormBlock'))
const MediaAndContentBlock = dynamic( ()=> import('@components/organisms/MediaAndContentBlock'))
const MediaBlock = dynamic( ()=> import('@components/organisms/MediaBlock'))
const QuestionsBlock = dynamic( ()=> import('@components/organisms/QuestionsBlock'))
const TabsBlock = dynamic( ()=> import('@components/organisms/TabsBlock'))

type BlockLayouts =
	| CallToActionBlockType
	| CardsBlockType
	| ContactFormBlockType
	| ImageSliderBlockType
	| MediaAndContentBlockType
	| MediaBlockType
	| QuestionsBlockType
	| TabsBlockType

interface RenderBlockProps {
	layout: BlockLayouts
}

function RenderBlock({ layout }: RenderBlockProps): ReactElement | null {
	switch (layout.blockType) {
		case 'cta-block':
			return <CallToActionBlock {...layout}/>
		case 'cards-block':
			return <CardsBlock {...layout}/>
		case 'contact-form-block':
			return <ContactFormBlock {...layout}/>
		case 'image-slider-block' :
			return <ImageSliderBlock {...layout}/>
		case 'media-and-content-block' :
			return <MediaAndContentBlock {...layout}/>
		case 'media-block' :
			return <MediaBlock {...layout}/>
		case 'questions-block' :
			return <QuestionsBlock {...layout}/>
		case 'tabs-block' :
			return <TabsBlock {...layout}/>
		default:
			return null
	}
}

export default RenderBlock
export type { RenderBlockProps, BlockLayouts }
