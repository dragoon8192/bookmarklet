javascript: (() => {
    class CosenseScript {
        static cosenseApi = 'https://scrapbox.io/api/code';
        constructor(projectName, pageName, scriptName) {
            this.projectName = projectName;
            this.pageName = pageName;
            this.scriptName = scriptName;
        }
        createDocumentElement(document) {
            let element = document.createElement('script');
            element.src = this.toUrl();
            element.dataset['cosenseApi'] = CosenseScript.cosenseApi;
            const datasetKeys = ['projectName', 'pageName', 'scriptName'];
            datasetKeys.forEach(key => {
                element.dataset[key] = this[key];
            });
            element.onerror = () => {
                alert('スクリプトのロードに失敗しました。\nURL: ' + this.toUrl());
            };
            return element;
        }
        toUrl() {
            return `${CosenseScript.cosenseApi}/${this.projectName}/${encodeURI(this.pageName)}/${this.scriptName}`;
        }
    }
    const script = new CosenseScript('dragoon8192-main', 'bookmarklet/cosenseLink', 'script.js');
    const element = script.createDocumentElement(document);
    document.body.appendChild(element);
})();
