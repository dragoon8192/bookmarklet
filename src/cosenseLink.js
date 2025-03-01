function main() {
    const cosenseUrl = 'https://scrapbox.io/'
    const url = location.href.trim();

    if (!navigator.clipboard) {
        alert('クリップボードAPIが利用できないブラウザです');
        return;
    }
    if (!url || url === '') {
        alert('URL が取得できませんでした');
        return;
    }
    let clip;
    if (url.startsWith(cosenseUrl)) {
        clip = url;
    } else {
        const title = document.title.trim().replace(/\s*[\[\]]\s*/g,' ');
        if (!title || title === '') {
            alert('title が取得できませんでした');
            return;
        }
        clip = '[' + title + ' ' + url + ']\n';
    }
    navigator.clipboard.writeText(clip).then(() => {
        alert('クリップボードにコピーしました\n' + clip);
    }, () => {
        alert('クリップボードに書き込めませんでした');
    });
}
main();
