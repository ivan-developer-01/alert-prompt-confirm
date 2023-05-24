# alert-prompt-confirm
**Бесплатная** альтернатива `alert`, `prompt`, и `confirm`.

Пример:

```javascript
(async function() {
    const userText = await prompts({
        modalMessage: "Введите текст:"
    });

    alerts({
        modalMessage: `Вы ввели: "${userText}"`
    })
})();
```

Попробовать онлайн можно тут: [ivan-developer-01.github.io/alert-prompt-confirm](https://ivan-developer-01.github.io/alert-prompt-confirm/).

**Замечание: Основной код находится в папке `apc`. Файлы `index.html`, `script.js` используются для веб-страницы проекта.**
