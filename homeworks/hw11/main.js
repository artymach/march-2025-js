// #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
// fetch('https://dummyjson.com/carts')
//     .then(response => response.json())
//     .then(dataObject => {
//         const {carts} = dataObject;
//
//         const container = document.createElement('div');
//
//         for (const cart of carts) {
//             const p1 = document.createElement('p');
//             p1.innerText = `Cart ID: ${cart.id}`;
//
//             const p2 = document.createElement('p');
//             p2.innerText = `Total: $${cart.total}`;
//
//             const p3 = document.createElement('p');
//             p3.innerText = `Discounted Total: $${cart.discountedTotal}`;
//
//             const p4 = document.createElement('p');
//             p4.innerText = `User ID: ${cart.userId}`;
//
//             const p5 = document.createElement('p');
//             p5.innerText = `Total Products: ${cart.totalProducts}`;
//
//             const p6 = document.createElement('p');
//             p6.innerText = `Total Quantity: ${cart.totalQuantity}`;
//
//             container.append(p1, p2, p3, p4, p5, p6);
//
//
//             const ol = document.createElement('ol');
//             for (const product of cart.products) {
//                 const li = document.createElement('li');
//                 li.innerText = `
//                     "id": ${product.id}
//                     "title":${product.title},
//                     "price":${product.price},
//                     "quantity":${product.quantity},
//                     "total": ${product.total},
//                     "discountPercentage":${product.discountPercentage},
//                     "discountedTotal": ${product.discountedTotal},
//                     "thumbnail": `
//                 const img = document.createElement('img');
//                 img.src = product.thumbnail;
//                 li.appendChild(img);
//                 ol.appendChild(li);
//                 container.appendChild(ol);
//             }
//
//             const hr = document.createElement('hr');
//             container.appendChild(hr);
//         }
//
//         document.body.appendChild(container);
//     });

//#whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(value => {
        console.log(value);

        const {recipes} = value;

        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container');

        for (const recipe of recipes) {

            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            const caloriesPerServing = document.createElement('p');
            caloriesPerServing.innerText = `caloriesPerServing: ${recipe.caloriesPerServing}`;

            const cookTimeMinutes = document.createElement('p');
            cookTimeMinutes.innerText = `cookTimeMinutes: ${recipe.cookTimeMinutes}`;

            const cuisine = document.createElement('p');
            cuisine.innerText = `cuisine: ${recipe.cuisine}`;

            const difficulty = document.createElement('p');
            difficulty.innerText = `difficulty: ${recipe.difficulty}`;

            const id = document.createElement('p');
            id.innerText = `id: ${recipe.id}`;

            const image = document.createElement('img');
            image.src = recipe.image;

            const {ingredients} = recipe;

            const ingredientsTitle = document.createElement('p');
            ingredientsTitle.innerText = 'ingredients:';

            const olIngredients = document.createElement('ol');

            for (const ingredient of ingredients) {
                const li = document.createElement('li');
                li.innerText = `"${ingredient}"`;

                olIngredients.appendChild(li);
            }

            const {instructions} = recipe;

            const instructionsTitle = document.createElement('p');
            instructionsTitle.innerText = 'instructions:';

            const olInstructions = document.createElement('ol');

            for (const instruction of instructions) {
                const li = document.createElement('li');
                li.innerText = `"${instruction}"`;

                olInstructions.appendChild(li);
            }

            const mealType = document.createElement('p');
            mealType.innerText = `mealType: ${recipe.mealType}`;

            const name = document.createElement('p');
            name.innerText = `name: ${recipe.name}`;

            const prepTimeMinutes = document.createElement('p');
            prepTimeMinutes.innerText = `prepTimeMinutes: ${recipe.prepTimeMinutes}`;

            const rating = document.createElement('p');
            rating.innerText = `rating: ${recipe.rating}`;

            const reviewCount = document.createElement('p');
            reviewCount.innerText = `reviewCount: ${recipe.reviewCount}`;

            const servings = document.createElement('p');
            servings.innerText = `servings: ${recipe.servings}`;

            const {tags} = recipe;

            const tagsTitle = document.createElement('p');
            tagsTitle.innerText = 'tags:';

            const olTags = document.createElement('ol');

            for (const tag of tags) {
                const li = document.createElement('li');
                li.innerText = tag;

                olTags.appendChild(li);
            }

            const userId = document.createElement('p');
            userId.innerText = `userId: ${recipe.userId}`

            recipeDiv.append(
                caloriesPerServing,
                cookTimeMinutes,
                cuisine,
                difficulty,
                id,
                image,
                ingredientsTitle,
                olIngredients,
                instructionsTitle,
                olInstructions,
                mealType,
                name,
                prepTimeMinutes,
                rating,
                reviewCount,
                servings,
                tagsTitle,
                olTags,
                userId,)

            const hr = document.createElement('hr');
            recipeDiv.appendChild(hr);

            containerDiv.appendChild(recipeDiv);
        }

        document.body.appendChild(containerDiv);

    });



