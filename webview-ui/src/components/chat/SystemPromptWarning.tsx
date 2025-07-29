import React from "react"
import { useAppTranslation } from "@/i18n/TranslationContext"

export const SystemPromptWarning: React.FC = () => {
	const { t } = useAppTranslation()

	return (
		<div className="flex items-center px-4 py-2 mb-2 text-sm rounded bg-zinc-400 text-vscode-editor-background">
			<div className="flex items-center justify-center w-5 h-5 mr-2"></div>
			<span>My System Prompt</span>
		</div>
	)
}

export default SystemPromptWarning
