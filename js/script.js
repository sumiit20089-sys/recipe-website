document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Mock Recipe Database
    // ==========================================
    const recipeDatabase = [
        {
            id: 1,
            title: "Spicy Margherita Pizza",
            category: "dinner",
            prepTime: "15 Mins",
            cookTime: "10 Mins",
            servings: "2",
            calories: "320 kcal",
            difficulty: "Easy",
            rating: "4.9 (120)",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "1 ball of pre-made pizza dough",
                "1/2 cup tomato marinara sauce",
                "1 cup fresh Mozzarella cheese, sliced",
                "1/4 cup fresh basil leaves",
                "1 tbsp extra virgin olive oil",
                "1/2 tsp crushed red pepper flakes",
                "1 clove garlic, finely minced"
            ],
            instructions: [
                "Preheat your oven to 475°F (246°C), preferably with a pizza stone inside.",
                "Roll out the pizza dough on a floured surface to a 12-inch circle.",
                "Spread the minced garlic and tomato sauce evenly across the dough, leaving a 1/2-inch border.",
                "Arrange the fresh mozzarella slices on top of the sauce layer.",
                "Slide onto the hot pizza stone and bake for 8-10 minutes until the crust is golden and the cheese is bubbling.",
                "Garnish with fresh basil, red pepper flakes, and a light drizzle of olive oil before slicing."
            ],
            healthTip: "Opt for a whole wheat pizza dough to double the dietary fiber content of this recipe."
        },
        {
            id: 2,
            title: "Honey Glazed Pancakes",
            category: "breakfast",
            prepTime: "10 Mins",
            cookTime: "10 Mins",
            servings: "4",
            calories: "210 kcal",
            difficulty: "Easy",
            rating: "4.8 (85)",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "1.5 cups all-purpose flour",
                "3.5 tsp baking powder",
                "1 tbsp white sugar",
                "1.25 cups milk",
                "1 egg",
                "3 tbsp butter, melted",
                "3 tbsp organic honey, for glazing",
                "Fresh berries, for serving"
            ],
            instructions: [
                "In a large bowl, sift together the flour, baking powder, salt, and sugar.",
                "Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.",
                "Heat a lightly oiled griddle or frying pan over medium-high heat.",
                "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
                "Brown on both sides (about 2-3 mins per side) and serve hot glazed with organic honey and topped with fresh berries."
            ],
            healthTip: "Replace all-purpose flour with oat flour or almond flour for a gluten-free alternative."
        },
        {
            id: 3,
            title: "Berry Yogurt Parfait",
            category: "breakfast",
            prepTime: "10 Mins",
            cookTime: "0 Mins",
            servings: "1",
            calories: "180 kcal",
            difficulty: "Easy",
            rating: "4.9 (42)",
            image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "1 cup plain Greek yogurt",
                "1/2 cup rolled granola",
                "1/4 cup fresh blueberries",
                "1/4 cup fresh strawberries, sliced",
                "1 tbsp chia seeds",
                "1 tsp maple syrup"
            ],
            instructions: [
                "Spoon half of the Greek yogurt into the bottom of a serving glass or bowl.",
                "Create a layer using half of the sliced strawberries and fresh blueberries.",
                "Sprinkle half of the granola and chia seeds over the berry layer.",
                "Repeat the layers with the remaining yogurt, berries, granola, and chia seeds.",
                "Drizzle the top with pure maple syrup and serve chilled immediately."
            ],
            healthTip: "Greek yogurt provides twice the protein of regular yogurt, keeping you full for longer."
        },
        {
            id: 4,
            title: "Italian Pasta with Basil",
            category: "lunch",
            prepTime: "5 Mins",
            cookTime: "10 Mins",
            servings: "2",
            calories: "380 kcal",
            difficulty: "Easy",
            rating: "4.7 (29)",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "200g spaghetti or penne pasta",
                "1 cup cherry tomatoes, halved",
                "3 tbsp basil pesto sauce",
                "1/4 cup fresh Parmesan cheese, grated",
                "1 tbsp toasted pine nuts",
                "Fresh basil leaves for decoration"
            ],
            instructions: [
                "Bring a large pot of salted water to a rolling boil and cook the pasta according to package instructions (about 8-10 minutes) until al dente.",
                "Reserve 1/4 cup of pasta cooking water, then drain the remaining water.",
                "Return the hot pasta to the pot and stir in the pesto sauce, adding a splash of the reserved pasta water to loosen.",
                "Gently toss in the halved cherry tomatoes and grated Parmesan cheese.",
                "Serve immediately topped with toasted pine nuts and fresh basil leaves."
            ],
            healthTip: "Adding nutritional yeast instead of Parmesan offers a dairy-free cheese alternative rich in B vitamins."
        },
        {
            id: 5,
            title: "Superfood Salad Bowl",
            category: "lunch",
            prepTime: "12 Mins",
            cookTime: "0 Mins",
            servings: "2",
            calories: "240 kcal",
            difficulty: "Easy",
            rating: "4.6 (15)",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "2 cups fresh baby spinach & kale mix",
                "1/2 cup cooked quinoa",
                "1/2 avocado, diced",
                "1/4 cup edamame beans",
                "1/4 cup cucumber slices",
                "2 tbsp pumpkin seeds",
                "2 tbsp lemon tahini dressing"
            ],
            instructions: [
                "Wash and dry the baby spinach and kale, then place them as the base of a large bowl.",
                "Arrange the cooked quinoa, diced avocado, edamame, and cucumber in sections on top of the greens.",
                "Sprinkle the entire bowl with pumpkin seeds for crunch.",
                "Drizzle with the lemon tahini dressing right before serving and toss well."
            ],
            healthTip: "Quinoa is a complete protein, containing all nine essential amino acids."
        },
        {
            id: 6,
            title: "Classic Berry French Toast",
            category: "breakfast",
            prepTime: "12 Mins",
            cookTime: "10 Mins",
            servings: "3",
            calories: "290 kcal",
            difficulty: "Medium",
            rating: "4.8 (34)",
            image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "6 slices of thick brioche bread",
                "3 eggs",
                "1/2 cup whole milk",
                "1 tsp ground cinnamon",
                "1 tsp vanilla extract",
                "2 tbsp butter",
                "Fresh raspberries & blackberries",
                "Maple syrup"
            ],
            instructions: [
                "In a shallow dish, whisk together the eggs, milk, cinnamon, and vanilla extract until well combined.",
                "Heat a large skillet or griddle over medium heat and melt the butter.",
                "Dip each slice of brioche bread into the egg mixture for 10-15 seconds per side to saturate.",
                "Place the soaked bread onto the skillet and cook for 3-4 minutes per side until golden brown.",
                "Serve immediately topped with fresh berries and warm maple syrup."
            ],
            healthTip: "Dust with a touch of cinnamon instead of powdered sugar to reduce refined sugars."
        },
        {
            id: 7,
            title: "Lemon Herb Baked Salmon",
            category: "dinner",
            prepTime: "10 Mins",
            cookTime: "20 Mins",
            servings: "2",
            calories: "340 kcal",
            difficulty: "Medium",
            rating: "4.9 (78)",
            image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "2 fresh salmon fillets",
                "1 lemon, sliced into rounds",
                "2 cloves garlic, minced",
                "1 tbsp fresh dill, chopped",
                "1 tbsp olive oil",
                "Salt and black pepper to taste"
            ],
            instructions: [
                "Preheat your oven to 400°F (204°C) and line a baking sheet with foil.",
                "Pat the salmon fillets dry with a paper towel and place them on the baking sheet.",
                "Drizzle both fillets with olive oil, then rub with minced garlic, chopped dill, salt, and pepper.",
                "Arrange lemon slices on top of each fillet.",
                "Bake for 12-15 minutes or until the salmon flakes easily with a fork.",
                "Serve warm accompanied by asparagus or roasted potatoes."
            ],
            healthTip: "Salmon is an excellent source of Omega-3 fatty acids, which promote heart and brain health."
        },
        {
            id: 8,
            title: "Chocolate Avocado Mousse",
            category: "dessert",
            prepTime: "15 Mins",
            cookTime: "0 Mins",
            servings: "4",
            calories: "190 kcal",
            difficulty: "Easy",
            rating: "4.7 (51)",
            image: "https://images.unsplash.com/photo-1541795795328-f073b763494e?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "2 ripe medium avocados, pitted",
                "1/2 cup unsweetened cocoa powder",
                "1/2 cup pure maple syrup",
                "1/2 cup almond milk",
                "1 tsp vanilla extract",
                "1/2 cup dark chocolate chips (optional)"
            ],
            instructions: [
                "Scoop the flesh out of the avocados and place them directly into a food processor or blender.",
                "Add the cocoa powder, maple syrup, almond milk, and vanilla extract.",
                "Blend on high speed until completely smooth, scraping down the sides as necessary.",
                "Spoon the mousse into small dessert cups.",
                "Chill in the refrigerator for at least 1 hour. Top with dark chocolate chips before serving."
            ],
            healthTip: "Avocados replace heavy cream in this recipe, providing healthy monounsaturated fats."
        },
        {
            id: 9,
            title: "Vegetarian Quesadillas",
            category: "lunch",
            prepTime: "10 Mins",
            cookTime: "10 Mins",
            servings: "2",
            calories: "310 kcal",
            difficulty: "Easy",
            rating: "4.8 (64)",
            image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "4 flour tortillas",
                "1 cup shredded Cheddar & Monterey Jack cheese",
                "1/2 cup canned black beans, rinsed",
                "1/2 cup sweet corn kernels",
                "1/2 red bell pepper, diced",
                "Sour cream & salsa for serving"
            ],
            instructions: [
                "Heat a large non-stick skillet over medium heat.",
                "Place one tortilla in the skillet and sprinkle with a quarter of the cheese.",
                "Layer half of the black beans, sweet corn, and diced red bell pepper over the cheese.",
                "Top with another quarter of the cheese and place a second tortilla on top.",
                "Cook for 3-4 minutes until the bottom tortilla is crisp, then carefully flip and cook for another 3 minutes.",
                "Repeat for the second quesadilla, slice into triangles, and serve with salsa and sour cream."
            ],
            healthTip: "Using black beans increases the plant protein and fiber content of this quick lunch."
        },
        {
            id: 10,
            title: "Creamy Mushroom Risotto",
            category: "dinner",
            prepTime: "15 Mins",
            cookTime: "25 Mins",
            servings: "3",
            calories: "420 kcal",
            difficulty: "Hard",
            rating: "4.6 (43)",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "1 cup Arborio rice",
                "2 cups mixed mushrooms (Cremini or Shiitake), sliced",
                "3.5 cups vegetable broth, kept warm",
                "1/2 cup dry white wine",
                "1 small onion, finely chopped",
                "2 tbsp butter",
                "1/3 cup grated Parmesan cheese",
                "2 tbsp fresh parsley, chopped"
            ],
            instructions: [
                "In a large skillet, melt 1 tbsp of butter and sauté mushrooms until browned; set aside.",
                "In a deep pot, sauté onions in the remaining butter until soft.",
                "Add Arborio rice, stirring constantly for 1-2 minutes until slightly translucent.",
                "Pour in the white wine and stir until fully absorbed by the rice.",
                "Add the warm vegetable broth one ladle at a time, stirring constantly, waiting for the liquid to absorb before adding more.",
                "Once the rice is tender (about 20 mins), stir in the cooked mushrooms, Parmesan cheese, and fresh parsley, and serve hot."
            ],
            healthTip: "Stirring continuously releases starch from the Arborio rice, creating the creamy sauce without adding cream."
        },
        {
            id: 11,
            title: "Mango Chia Seed Pudding",
            category: "dessert",
            prepTime: "10 Mins",
            cookTime: "0 Mins",
            servings: "2",
            calories: "160 kcal",
            difficulty: "Easy",
            rating: "4.8 (37)",
            image: "https://images.unsplash.com/photo-1549589290-08a6f588ac76?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "1/4 cup organic chia seeds",
                "1 cup coconut milk (or almond milk)",
                "1 tbsp pure maple syrup",
                "1/2 cup fresh ripe mango, pureed",
                "1/2 cup fresh mango, diced for topping"
            ],
            instructions: [
                "In a jar or bowl, whisk together the chia seeds, coconut milk, and maple syrup.",
                "Let the mixture sit for 5 minutes, stir again to prevent clumping, then cover and refrigerate for at least 4 hours (or overnight).",
                "To assemble, spoon a layer of mango puree into the bottom of two glasses.",
                "Divide the chilled chia pudding evenly between the glasses.",
                "Top with diced fresh mango and serve cold."
            ],
            healthTip: "Chia seeds are highly dense in antioxidants, soluble fiber, and calcium."
        },
        {
            id: 12,
            title: "Classic Canadian Poutine",
            category: "lunch",
            prepTime: "10 Mins",
            cookTime: "15 Mins",
            servings: "2",
            calories: "450 kcal",
            difficulty: "Medium",
            rating: "4.8 (89)",
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
            ingredients: [
                "3 large Russet potatoes, cut into fries",
                "1 cup fresh cheese curds",
                "1.5 cups beef gravy (thick and hot)",
                "2 tbsp vegetable oil",
                "Salt to taste"
            ],
            instructions: [
                "Soak cut potatoes in cold water for 30 minutes, drain, and dry thoroughly.",
                "Toss fries in vegetable oil and bake at 425°F (218°C) for 20 minutes, turning once, until golden and crisp.",
                "Remove fries from oven, season immediately with salt, and pile into a shallow bowl.",
                "Distribute the fresh cheese curds evenly over the hot fries.",
                "Pour piping hot beef gravy generously over the cheese curds and fries to melt the curds slightly. Serve immediately."
            ],
            healthTip: "Baking the fries instead of deep-frying reduces the total fat content by over 50%."
        }
    ];

    // ==========================================
    // 2. Global UI Elements
    // ==========================================
    const header = document.getElementById('header');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const toast = document.getElementById('toast-message');

    // Scroll Navbar Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Menu Toggle
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            hamburgerBtn.classList.toggle('active');
            
            // Hamburger graphic transition
            const spans = hamburgerBtn.querySelectorAll('span');
            if (mobileMenu.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Toast Notification utility
    function showToast(message, isError = false) {
        if (!toast) return;
        toast.textContent = message;
        toast.style.backgroundColor = isError ? '#ef4444' : '#1e293b';
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    // ==========================================
    // 3. Search and Category Filtering (Recipes Page)
    // ==========================================
    const recipesPageGrid = document.getElementById('recipes-page-grid');
    const recipeSearchInput = document.getElementById('recipe-search-input');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentSearchQuery = "";
    let currentCategory = "all";

    // Initialize Page Filters from URL Query Params
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const searchParam = urlParams.get('search');

    if (categoryParam) {
        currentCategory = categoryParam.toLowerCase();
    }
    if (searchParam) {
        currentSearchQuery = searchParam.toLowerCase();
        if (recipeSearchInput) recipeSearchInput.value = searchParam;
    }

    // Filter Logic Execution
    function filterRecipes() {
        if (!recipesPageGrid) return;

        const cards = recipesPageGrid.querySelectorAll('.recipe-card');
        let visibleCount = 0;

        cards.forEach(card => {
            // Get category and title from card data attributes
            const cardId = parseInt(card.getAttribute('data-id') || card.getAttribute('data-recipe-id'));
            const recipeData = recipeDatabase.find(r => r.id === cardId);
            
            if (!recipeData) return;

            const matchesCategory = (currentCategory === "all" || recipeData.category === currentCategory);
            const matchesSearch = (
                recipeData.title.toLowerCase().includes(currentSearchQuery) ||
                recipeData.ingredients.some(ing => ing.toLowerCase().includes(currentSearchQuery))
            );

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Handle No Results State
        const existingNoResults = recipesPageGrid.querySelector('.no-results');
        if (existingNoResults) existingNoResults.remove();

        if (visibleCount === 0) {
            const noResultsHTML = `
                <div class="no-results">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <h3>No Recipes Found</h3>
                    <p>We couldn't find any recipes matching "${currentSearchQuery}". Try using different ingredients or check spelling.</p>
                </div>
            `;
            recipesPageGrid.insertAdjacentHTML('beforeend', noResultsHTML);
        }
    }

    // Bind event listeners for search and filters on Recipes Page
    if (recipesPageGrid) {
        
        // Sync filter buttons active class from URL loading
        filterBtns.forEach(btn => {
            const btnCategory = btn.getAttribute('data-category');
            if (btnCategory === currentCategory) {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });

        // Perform initial load filtering
        filterRecipes();

        // Search Input Change
        if (recipeSearchInput) {
            recipeSearchInput.addEventListener('input', (e) => {
                currentSearchQuery = e.target.value.toLowerCase();
                filterRecipes();
            });
        }

        // Category Buttons Clicks
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.getAttribute('data-category');
                filterRecipes();
            });
        });
    }

    // ==========================================
    // 4. Recipe Detail Modal Logic
    // ==========================================
    const modalOverlay = document.getElementById('recipe-modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalDynamicContent = document.getElementById('modal-dynamic-content');

    function openRecipeModal(recipeId) {
        const recipe = recipeDatabase.find(r => r.id === parseInt(recipeId));
        if (!recipe || !modalOverlay || !modalDynamicContent) return;

        // Generate Ingredients List HTML
        const ingredientsHTML = recipe.ingredients.map(ing => `
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                <span>${ing}</span>
            </li>
        `).join('');

        // Generate Instructions List HTML
        const instructionsHTML = recipe.instructions.map((step, index) => `
            <div class="instruction-step">
                <div class="step-num">${index + 1}</div>
                <div class="step-text">
                    <p>${step}</p>
                </div>
            </div>
        `).join('');

        // Inject Data into Modal Layout
        modalDynamicContent.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="modal-hero-img">
            <div class="modal-content-container">
                <div class="modal-header">
                    <span class="badge badge-orange" style="margin-bottom: 0.5rem;">${recipe.category}</span>
                    <h2>${recipe.title}</h2>
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width: 1rem; height: 1rem; fill: #f59e0b; color: #f59e0b;" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/></svg>
                        <strong>${recipe.rating} Rating</strong>
                    </div>
                </div>

                <div class="modal-meta-grid">
                    <div class="modal-meta-item">
                        <label>Prep Time</label>
                        <span>${recipe.prepTime}</span>
                    </div>
                    <div class="modal-meta-item">
                        <label>Cook Time</label>
                        <span>${recipe.cookTime}</span>
                    </div>
                    <div class="modal-meta-item">
                        <label>Servings</label>
                        <span>${recipe.servings} Servings</span>
                    </div>
                    <div class="modal-meta-item">
                        <label>Calories</label>
                        <span>${recipe.calories}</span>
                    </div>
                </div>

                <div class="modal-body" style="margin-top: 2.5rem;">
                    <div class="ingredients-section">
                        <h3>Ingredients</h3>
                        <ul class="ingredients-list">
                            ${ingredientsHTML}
                        </ul>
                        
                        <div style="margin-top: 2rem; background-color: var(--primary-light); padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary);">
                            <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--primary); margin-bottom: 0.25rem;">💡 Chef's Health Tip</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${recipe.healthTip}</p>
                        </div>
                    </div>

                    <div class="instructions-section">
                        <h3>Instructions</h3>
                        <div class="instructions-list">
                            ${instructionsHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;

        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Lock main scroll
    }

    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('open');
        document.body.style.overflow = ''; // Unlock main scroll
    }

    // Click trigger handlers for opening modal
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.view-recipe-trigger');
        if (trigger) {
            e.preventDefault();
            const recipeId = trigger.getAttribute('data-recipe-id');
            openRecipeModal(recipeId);
        }
    });

    // Close Modal Button Click
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Close Modal when clicking overlay background
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        // Close on ESC key press
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
                closeModal();
            }
        });
    }

    // ==========================================
    // 5. Newsletter Submission Handling
    // ==========================================
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput && emailInput.value.trim() !== "") {
                // Email format validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(emailInput.value.trim())) {
                    showToast("🎉 Thank you! You've successfully subscribed to RecipeNest.");
                    emailInput.value = "";
                } else {
                    showToast("❌ Please enter a valid email address.", true);
                }
            }
        });
    }

    // ==========================================
    // 6. Contact Form Validation
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameVal = document.getElementById('contact-name').value.trim();
            const emailVal = document.getElementById('contact-email').value.trim();
            const subjectVal = document.getElementById('contact-subject').value.trim();
            const messageVal = document.getElementById('contact-message').value.trim();

            // Simple validation check
            if (!nameVal || !emailVal || !subjectVal || !messageVal) {
                showToast("⚠️ All form fields are required.", true);
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailVal)) {
                showToast("❌ Please enter a valid email address.", true);
                return;
            }

            // Success response state
            showToast("📨 Thank you! Your message has been sent successfully.");
            contactForm.reset();
        });
    }

    // ==========================================
    // 7. Wishlist Button Interactive Micro-animation
    // ==========================================
    document.addEventListener('click', (e) => {
        const wishlistBtn = e.target.closest('.recipe-wishlist');
        if (wishlistBtn) {
            wishlistBtn.classList.toggle('active');
            const svg = wishlistBtn.querySelector('svg');
            
            if (wishlistBtn.classList.contains('active')) {
                wishlistBtn.style.color = '#ef4444'; // Red color active
                svg.setAttribute('fill', '#ef4444');
                showToast("❤️ Recipe added to your favorites!");
            } else {
                wishlistBtn.style.color = ''; // Restore default
                svg.setAttribute('fill', 'none');
                showToast("💔 Recipe removed from your favorites.");
            }
        }
    });

});
