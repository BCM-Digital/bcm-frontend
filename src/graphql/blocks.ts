import { LINK_FIELDS } from '@graphql/link'
import { EMBEDDED_VIDEO_FIELDS, MEDIA_FIELDS } from '@graphql/media'
import { FORM_FIELDS } from '@graphql/form'


export const CALL_TO_ACTION_BLOCK = `
...on CallToActionBlock {
	id
	blockName
	blockType
	ctaBlockFields {
	  anchorId
		gridLayout
		cta {
			id
			type
			title
			richText
			links {
					link ${LINK_FIELDS()}
			}
			featureImage ${MEDIA_FIELDS} 			
		}   
	}
}
`

export const CARDS_BLOCK = `
...on CardsBlock {
	id
	blockName
	blockType
	cardsBlockFields {
	  anchorId
	  breadcrumb
		title
		richText
		links {
		    link ${LINK_FIELDS()}
		}
		cards {
			title
			shortDescription
			links {
				link ${LINK_FIELDS()}
			}				    
		}     
	}
}
`

export const CONTACT_FORM_BLOCK = `
...on ContactFormBlock {
	id
	blockName
	blockType
	contactFormBlockFields {
	  anchorId
	  showContactInfo
		showGoogleMap
		showOpeningHours
		richText
		payloadForm ${FORM_FIELDS}    
	}
}
`

export const IMAGE_SLIDER_BLOCK = `
...on ImageSliderBlock {
	id
	blockName
	blockType
	imageSliderBlockFields {
	  anchorId
	  breadcrumb
		title
		richText
		links {
		    link ${LINK_FIELDS()}
		}
		slides {
			media ${MEDIA_FIELDS}		
		}
	}
}
`


export const MEDIA_AND_CONTENT_BLOCK = `
...on MediaAndContentBlock {
	id
	blockName
	blockType
	mediaAndContentBlockFields {
	  anchorId
	  breadcrumb
		title
		richText
		links {
		    link ${LINK_FIELDS()}
		}
		media ${MEDIA_FIELDS}
		mediaPosition   
	}
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
	id
	blockName
	blockType
	mediaBlockFields {
	  anchorId
		media {
			gridLayout
			media ${MEDIA_FIELDS} 
			embeddedVideo ${EMBEDDED_VIDEO_FIELDS}
		}
	}
}
`

export const QUESTIONS_BLOCK = `
...on QuestionsBlock {
	id
	blockName
	blockType
	questionsBlockFields {
	  anchorId
	  breadcrumb
		title
		richText
		links {
		    link ${LINK_FIELDS()}
		}
		faqs {
			title
			richText			
		}  
	}
}
`
export const TABS_BLOCK = `
...on TabsBlock {
	id
	blockName
	blockType
	tabsBlockFields {
	  anchorId
		tabs {
			label
			richText
			accordions {
				title
				richText						
			}
			media ${MEDIA_FIELDS} 			
		}  
	}
}
`