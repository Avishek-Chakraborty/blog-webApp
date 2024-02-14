import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../config/config";
import PropTypes from "prop-types";


export default function RTE({ name, control, label, defaultValue = "" }) {
	return (
		<div className="w-full">
			{label && <label className="text-sm text-gray-600">{label}</label>}
			<Controller
				name={name || "content"}
				control={control}
				render={({ field: { onChange } }) => (
					<Editor
						apiKey= {conf.tinymceAPI}
						initialValue={defaultValue}
						init={{
							initialValue: {defaultValue},
							branding: false,
							height: 500,
							menubar: true,
							plugins: [
								"advlist",
								"anchor",
								"autolink",
								"autosave",
								"charmap",
								"code",
								"codesample",
								"emoticons",
								"fullscreen",
								"help",
								"image",
								"insertdatetime",
								"link",
								"lists",
								"media",
								"preview",
								"searchreplace",
								"table",
								"visualblocks",
								"accordion",
								"wordcount",
							],
							codesample_languages: [
								{ text: "HTML/XML", value: "markup" },
								{ text: "JavaScript", value: "javascript" },
								{ text: "CSS", value: "css" },
								{ text: "PHP", value: "php" },
								{ text: "Ruby", value: "ruby" },
								{ text: "Python", value: "python" },
								{ text: "Java", value: "java" },
								{ text: "C", value: "c" },
								{ text: "C#", value: "csharp" },
								{ text: "C++", value: "cpp" },
							],
							toolbar:
								"undo redo |link image accordion | styles | bold italic underline strikethrough | align | bullist numlist | restoredraft | code | emoticons | wordcount | codesample",
							content_style:
								"body {font-family:Helvetica,Arial,sans-serif; font-size:14px }",
							font_family_formats:
								"Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n",
						}}
						onEditorChange={onChange}
					/>
				)}
			/>
		</div>
	);
}

RTE.propTypes={
    name: PropTypes.any,
    control: PropTypes.any,
    label: PropTypes.any,
    defaultValue: PropTypes.any
}
