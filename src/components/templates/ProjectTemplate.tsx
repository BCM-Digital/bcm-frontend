import React from 'react'
import { Project } from '@types'

type ProjectTemplateProps = {
	project: Project
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project }) => {
	return (
		<div>
			<h1>{project.title}</h1>
			{/* Add more project-specific fields here */}
		</div>
	)
}

export default ProjectTemplate
