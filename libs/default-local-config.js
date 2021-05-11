const getDefaultConfig = () => {
    return {
        project_id: "",
        version: "",
        formats: [
            {
                format_name: "css",
                file_name: "tokens",
                output_target: "./"
            }
        ]
    }
}

module.exports = { getDefaultConfig };
