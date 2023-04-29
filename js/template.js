export function cardTemplate(card) {
    return `
    <div class="card">
    <div class="card__top">
        <img src="${card.icon}" alt="zombie" class="card__icon" />
        <div class="card__top-text">
            <p class="card__title">${card.title}</p>
            <p class="card__type">${card.type}</p>
        </div>
    </div>
    <div class="card__bottom">
        <p class="card__description">${card.description}</p>
        <button class="card__btn-more card-blue">See more</button>
    </div>
</div>
    `
}