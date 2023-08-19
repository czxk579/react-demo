import { recipes } from './data.js';

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>菜谱</h1>
      {/* 这里的 <Recipe {...recipe} key={recipe.id} /> 是一种简写方式，它表示“把 recipe 对象里的每个属性都作为 props 传给 Recipe 组件” */}
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}
