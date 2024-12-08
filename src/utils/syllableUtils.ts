export default function divide(input: string): string {
    // Sesli harfler
    const vowels = "aeıioöuüAEIİOÖUÜ";
    
    // Heceleme işlemi
    function divideWord(word: string): string {
        let result = [];
        let currentWord = word;

        while (currentWord.length > 0) {
            let lastVowelIndex = -1;

            // En sağdaki sesli harfi bul
            for (let i = currentWord.length - 1; i >= 0; i--) {
                if (vowels.includes(currentWord[i])) {
                    lastVowelIndex = i;
                    break;
                }
            }

            // Sesli harf bulunamadıysa kalan harfleri son heceye ekle
            if (lastVowelIndex === -1) {
                result.push(currentWord);
                break;
            }

            // Sesli harfin solundaki harfi kontrol et
            if (lastVowelIndex > 0 && !vowels.includes(currentWord[lastVowelIndex - 1])) {
                // Sessiz harf varsa onu da heceye ekle
                result.push(currentWord.slice(lastVowelIndex - 1));
                currentWord = currentWord.slice(0, lastVowelIndex - 1);
            } else {
                // Yalnızca sesli harften sonraki kısmı al
                result.push(currentWord.slice(lastVowelIndex));
                currentWord = currentWord.slice(0, lastVowelIndex);
            }
        }

        // Hece listesini ters çevirip birleştir
        return result.reverse().join("-");
    }

    // Cümledeki her kelimeyi işleyip hecelerine ayır
    return input
        .split(" ")
        .map(word => divideWord(word))
        .join(" ");
}