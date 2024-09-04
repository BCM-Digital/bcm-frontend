/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkGroup".
 */
export type LinkGroup =
	| {
			link: Link
			id?: string | null
	  }[]
	| null
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MenuItem".
 */
export type MenuItem =
	| {
			type?: ('link' | 'submenu') | null
			label?: string | null
			link?: Link
			submenu?: {
				submenuItem?: MenuLink[] | null
			}
			id?: string | null
	  }[]
	| null
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BusinessHours".
 */
export type BusinessHours =
	| {
			dayOfWeek: string
			openingHours: string
			id?: string | null
	  }[]
	| null

export interface Config {
	collections: {
		pages: Page
		projects: Project
		news: News
		media: Media
		categories: Category
		users: User
		forms: Form
		'form-submissions': FormSubmission
		'payload-preferences': PayloadPreference
		'payload-migrations': PayloadMigration
	}
	globals: {
		header: Header
		contact: Contact
		footer: Footer
		settings: Setting
	}
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
	id: string
	title: string
	fullTitle?: string | null
	excerpt?: string | null
	pageHead?: PageHead
	layout?:
		| (
				| ArchiveBlock
				| CardsBlock
				| ContactFormBlock
				| ImageSliderBlock
				| MediaAndContentBlock
				| MediaBlock
				| ProjectGrid
				| TabsBlock
		  )[]
		| null
	slug?: string | null
	author?: (string | null) | User
	featureImage?: string | Media | null
	meta?: {
		title?: string | null
		description?: string | null
		image?: string | Media | null
	}
	parent?: (string | null) | Page
	breadcrumbs?:
		| {
				doc?: (string | null) | Page
				url?: string | null
				label?: string | null
				id?: string | null
		  }[]
		| null
	updatedAt: string
	createdAt: string
	_status?: ('draft' | 'published') | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PageHead".
 */
export interface PageHead {
	type?: ('basic' | 'hero') | null
	subhead?: string | null
	title?: string | null
	content?: string | null
	links?: LinkGroup
	media?: string | Media | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Link".
 */
export interface Link {
	type: 'reference' | 'custom'
	newTab?: boolean | null
	reference?:
		| ({
				relationTo: 'pages'
				value: string | Page
		  } | null)
		| ({
				relationTo: 'projects'
				value: string | Project
		  } | null)
		| ({
				relationTo: 'news'
				value: string | News
		  } | null)
	url?: string | null
	label: string
	appearance?:
		| (
				| 'primary'
				| 'primary-outline'
				| 'secondary'
				| 'secondary-outline'
				| 'white'
				| 'white-outline'
				| 'text'
		  )
		| null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
	id: string
	title: string
	thumbnail?: string | Media | null
	slug?: string | null
	categories?: (string | Category)[] | null
	publishedAt?: string | null
	pageHead?: PageHead
	layout?:
		| (
				| CardsBlock
				| ContactFormBlock
				| ImageSliderBlock
				| MediaAndContentBlock
				| MediaBlock
				| TabsBlock
		  )[]
		| null
	relatedProjects?: (string | Project)[] | null
	meta?: {
		title?: string | null
		description?: string | null
		image?: string | Media | null
	}
	updatedAt: string
	createdAt: string
	_status?: ('draft' | 'published') | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
	id: string
	alt: string
	updatedAt: string
	createdAt: string
	url?: string | null
	filename?: string | null
	mimeType?: string | null
	filesize?: number | null
	width?: number | null
	height?: number | null
	focalX?: number | null
	focalY?: number | null
	sizes?: {
		card?: {
			url?: string | null
			width?: number | null
			height?: number | null
			mimeType?: string | null
			filesize?: number | null
			filename?: string | null
		}
		video?: {
			url?: string | null
			width?: number | null
			height?: number | null
			mimeType?: string | null
			filesize?: number | null
			filename?: string | null
		}
		fullscreen?: {
			url?: string | null
			width?: number | null
			height?: number | null
			mimeType?: string | null
			filesize?: number | null
			filename?: string | null
		}
	}
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
	id: string
	title?: string | null
	updatedAt: string
	createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CardsBlock".
 */
export interface CardsBlock {
	cardsBlockFields?: {
		anchorId?: string | null
		breadcrumb?: string | null
		title?: string | null
		richText?: {
			root: {
				type: string
				children: {
					type: string
					version: number
					[k: string]: unknown
				}[]
				direction: ('ltr' | 'rtl') | null
				format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
				indent: number
				version: number
			}
			[k: string]: unknown
		} | null
		links?: LinkGroup
		cards?:
			| {
					title: string
					shortDescription?: string | null
					links?: LinkGroup
					id?: string | null
			  }[]
			| null
	}
	id?: string | null
	blockName?: string | null
	blockType: 'cards-block'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactFormBlock".
 */
export interface ContactFormBlock {
	contactFormBlockFields?: {
		anchorId?: string | null
		showContactInfo?: ('yes' | 'no') | null
		showGoogleMap?: ('yes' | 'no') | null
		showOpeningHours?: ('yes' | 'no') | null
		richText?: {
			root: {
				type: string
				children: {
					type: string
					version: number
					[k: string]: unknown
				}[]
				direction: ('ltr' | 'rtl') | null
				format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
				indent: number
				version: number
			}
			[k: string]: unknown
		} | null
		payloadForm?: (string | null) | Form
	}
	id?: string | null
	blockName?: string | null
	blockType: 'contact-form-block'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
	id: string
	title: string
	fields?:
		| (
				| {
						name: string
						label?: string | null
						width?: number | null
						required?: boolean | null
						defaultValue?: boolean | null
						id?: string | null
						blockName?: string | null
						blockType: 'checkbox'
				  }
				| {
						name: string
						label?: string | null
						width?: number | null
						required?: boolean | null
						id?: string | null
						blockName?: string | null
						blockType: 'country'
				  }
				| {
						name: string
						label?: string | null
						width?: number | null
						required?: boolean | null
						id?: string | null
						blockName?: string | null
						blockType: 'email'
				  }
				| {
						message?: {
							root: {
								type: string
								children: {
									type: string
									version: number
									[k: string]: unknown
								}[]
								direction: ('ltr' | 'rtl') | null
								format:
									| 'left'
									| 'start'
									| 'center'
									| 'right'
									| 'end'
									| 'justify'
									| ''
								indent: number
								version: number
							}
							[k: string]: unknown
						} | null
						id?: string | null
						blockName?: string | null
						blockType: 'message'
				  }
				| {
						name: string
						label?: string | null
						width?: number | null
						defaultValue?: number | null
						required?: boolean | null
						id?: string | null
						blockName?: string | null
						blockType: 'number'
				  }
				| {
						name: string
						label?: string | null
						width?: number | null
						defaultValue?: string | null
						options?:
							| {
									label: string
									value: string
									id?: string | null
							  }[]
							| null
						required?: boolean | null
						id?: string | null
						blockName?: string | null
						blockType: 'select'
				  }
				| {
						name: string
						label?: string | null
						width?: number | null
						required?: boolean | null
						id?: string | null
						blockName?: string | null
						blockType: 'state'
				  }
				| {
						name: string
						label?: string | null
						width?: number | null
						defaultValue?: string | null
						required?: boolean | null
						id?: string | null
						blockName?: string | null
						blockType: 'text'
				  }
				| {
						name: string
						label?: string | null
						width?: number | null
						defaultValue?: string | null
						required?: boolean | null
						id?: string | null
						blockName?: string | null
						blockType: 'textarea'
				  }
		  )[]
		| null
	submitButtonLabel?: string | null
	confirmationType?: ('message' | 'redirect') | null
	confirmationMessage?: {
		root: {
			type: string
			children: {
				type: string
				version: number
				[k: string]: unknown
			}[]
			direction: ('ltr' | 'rtl') | null
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
			indent: number
			version: number
		}
		[k: string]: unknown
	} | null
	redirect?: {
		type?: ('reference' | 'custom') | null
		reference?: {
			relationTo: 'pages'
			value: string | Page
		} | null
		url?: string | null
	}
	emails?:
		| {
				emailTo?: string | null
				cc?: string | null
				bcc?: string | null
				replyTo?: string | null
				emailFrom?: string | null
				subject: string
				message?: {
					root: {
						type: string
						children: {
							type: string
							version: number
							[k: string]: unknown
						}[]
						direction: ('ltr' | 'rtl') | null
						format:
							| 'left'
							| 'start'
							| 'center'
							| 'right'
							| 'end'
							| 'justify'
							| ''
						indent: number
						version: number
					}
					[k: string]: unknown
				} | null
				id?: string | null
		  }[]
		| null
	updatedAt: string
	createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ImageSliderBlock".
 */
export interface ImageSliderBlock {
	imageSliderBlockFields: {
		anchorId?: string | null
		breadcrumb?: string | null
		title?: string | null
		richText?: {
			root: {
				type: string
				children: {
					type: string
					version: number
					[k: string]: unknown
				}[]
				direction: ('ltr' | 'rtl') | null
				format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
				indent: number
				version: number
			}
			[k: string]: unknown
		} | null
		links?: LinkGroup
		slides: {
			media: string | Media
			id?: string | null
		}[]
	}
	id?: string | null
	blockName?: string | null
	blockType: 'image-slider-block'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaAndContentBlock".
 */
export interface MediaAndContentBlock {
	mediaAndContentBlockFields?: {
		anchorId?: string | null
		breadcrumb?: string | null
		title?: string | null
		richText?: {
			root: {
				type: string
				children: {
					type: string
					version: number
					[k: string]: unknown
				}[]
				direction: ('ltr' | 'rtl') | null
				format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
				indent: number
				version: number
			}
			[k: string]: unknown
		} | null
		links?: LinkGroup
		media?: string | Media | null
		mediaPosition?: ('left' | 'right') | null
	}
	id?: string | null
	blockName?: string | null
	blockType: 'media-and-content-block'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaBlock".
 */
export interface MediaBlock {
	mediaBlockFields: {
		anchorId?: string | null
		media: {
			media?: string | Media | null
			embeddedVideo?: EmbeddedVideo
			gridLayout: 'fullwidth' | 'fullscreen' | 'half' | 'third'
			id?: string | null
		}[]
	}
	id?: string | null
	blockName?: string | null
	blockType: 'media-block'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "EmbeddedVideo".
 */
export interface EmbeddedVideo {
	embed?: boolean | null
	poster?: string | Media | null
	platform?: ('youtube' | 'vimeo' | 'internal') | null
	videoURL?: string | null
	video?: string | Media | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TabsBlock".
 */
export interface TabsBlock {
	tabsBlockFields: {
		anchorId?: string | null
		tabs: {
			label: string
			richText?: {
				root: {
					type: string
					children: {
						type: string
						version: number
						[k: string]: unknown
					}[]
					direction: ('ltr' | 'rtl') | null
					format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
					indent: number
					version: number
				}
				[k: string]: unknown
			} | null
			accordions?:
				| {
						title: string
						richText?: {
							root: {
								type: string
								children: {
									type: string
									version: number
									[k: string]: unknown
								}[]
								direction: ('ltr' | 'rtl') | null
								format:
									| 'left'
									| 'start'
									| 'center'
									| 'right'
									| 'end'
									| 'justify'
									| ''
								indent: number
								version: number
							}
							[k: string]: unknown
						} | null
						id?: string | null
				  }[]
				| null
			media?: string | Media | null
			id?: string | null
		}[]
	}
	id?: string | null
	blockName?: string | null
	blockType: 'tabs-block'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
	id: string
	title: string
	thumbnail?: string | Media | null
	slug?: string | null
	categories?: (string | Category)[] | null
	publishedAt?: string | null
	pageHead?: PageHead
	layout: (
		| CardsBlock
		| ContactFormBlock
		| ImageSliderBlock
		| MediaAndContentBlock
		| MediaBlock
		| TabsBlock
	)[]
	relatedArticles?: (string | News)[] | null
	meta?: {
		title?: string | null
		description?: string | null
		image?: string | Media | null
	}
	updatedAt: string
	createdAt: string
	_status?: ('draft' | 'published') | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ArchiveBlock".
 */
export interface ArchiveBlock {
	archiveBlockFields?: {
		introContent?: {
			root: {
				type: string
				children: {
					type: string
					version: number
					[k: string]: unknown
				}[]
				direction: ('ltr' | 'rtl') | null
				format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
				indent: number
				version: number
			}
			[k: string]: unknown
		} | null
		populateBy?: ('collection' | 'selection') | null
		relationTo?: ('news' | 'projects') | null
		categories?: (string | Category)[] | null
		limit?: number | null
		selectedDocs?:
			| (
					| {
							relationTo: 'news'
							value: string | News
					  }
					| {
							relationTo: 'projects'
							value: string | Project
					  }
			  )[]
			| null
		populatedDocs?:
			| (
					| {
							relationTo: 'news'
							value: string | News
					  }
					| {
							relationTo: 'projects'
							value: string | Project
					  }
			  )[]
			| null
		populatedDocsTotal?: number | null
	}
	id?: string | null
	blockName?: string | null
	blockType: 'archive-block'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ProjectGrid".
 */
export interface ProjectGrid {
	projectGridFields: {
		introText?: {
			root: {
				type: string
				children: {
					type: string
					version: number
					[k: string]: unknown
				}[]
				direction: ('ltr' | 'rtl') | null
				format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
				indent: number
				version: number
			}
			[k: string]: unknown
		} | null
		tiles: {
			type?: ('project' | 'image' | 'text') | null
			width?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null
			height?: boolean | null
			project?: (string | null) | Project
			image?: string | Media | null
			tileText?: {
				root: {
					type: string
					children: {
						type: string
						version: number
						[k: string]: unknown
					}[]
					direction: ('ltr' | 'rtl') | null
					format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
					indent: number
					version: number
				}
				[k: string]: unknown
			} | null
			invertBackground?: boolean | null
			id?: string | null
		}[]
	}
	id?: string | null
	blockName?: string | null
	blockType: 'project-grid'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
	id: string
	firstName: string
	lastName: string
	fullName?: string | null
	roles: ('admin' | 'public')[]
	updatedAt: string
	createdAt: string
	enableAPIKey?: boolean | null
	apiKey?: string | null
	apiKeyIndex?: string | null
	email: string
	resetPasswordToken?: string | null
	resetPasswordExpiration?: string | null
	salt?: string | null
	hash?: string | null
	loginAttempts?: number | null
	lockUntil?: string | null
	password: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
	id: string
	form: string | Form
	submissionData?:
		| {
				field: string
				value: string
				id?: string | null
		  }[]
		| null
	updatedAt: string
	createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
	id: string
	user: {
		relationTo: 'users'
		value: string | User
	}
	key?: string | null
	value?:
		| {
				[k: string]: unknown
		  }
		| unknown[]
		| string
		| number
		| boolean
		| null
	updatedAt: string
	createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
	id: string
	name?: string | null
	batch?: number | null
	updatedAt: string
	createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
	id: string
	mainMenu?: MainMenu
	updatedAt?: string | null
	createdAt?: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MainMenu".
 */
export interface MainMenu {
	menuItem?: MenuItem
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MenuLink".
 */
export interface MenuLink {
	link: Link
	id?: string | null
	blockName?: string | null
	blockType: 'menuLink'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact".
 */
export interface Contact {
	id: string
	contactDetails?: ContactDetails
	socialMedia?: SocialMedia
	updatedAt?: string | null
	createdAt?: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactDetails".
 */
export interface ContactDetails {
	businessName?: string | null
	businessABN?: string | null
	primaryEmail?: string | null
	contactPhone?: string | null
	location?: {
		root: {
			type: string
			children: {
				type: string
				version: number
				[k: string]: unknown
			}[]
			direction: ('ltr' | 'rtl') | null
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
			indent: number
			version: number
		}
		[k: string]: unknown
	} | null
	lat?: string | null
	lng?: string | null
	businessHours?: BusinessHours
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SocialMedia".
 */
export interface SocialMedia {
	socialLinks?:
		| {
				label: string
				url: string
				id?: string | null
		  }[]
		| null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
	id: string
	footerRichText?: {
		root: {
			type: string
			children: {
				type: string
				version: number
				[k: string]: unknown
			}[]
			direction: ('ltr' | 'rtl') | null
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
			indent: number
			version: number
		}
		[k: string]: unknown
	} | null
	footerMenu?: Menu
	legalsMenu?: Menu
	updatedAt?: string | null
	createdAt?: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Menu".
 */
export interface Menu {
	menuItem?: MenuItem
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
	id: string
	pageSettings?: PageSettings
	updatedAt?: string | null
	createdAt?: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PageSettings".
 */
export interface PageSettings {
	newsPage?: (string | null) | Page
	projectsPage?: (string | null) | Page
}

declare module 'payload' {
	export interface GeneratedTypes extends Config {}
}
