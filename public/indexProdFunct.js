function fetchProducts(done) {
    $.get("/api/products", function (data) {
        done(data);
    });
}

function addProduct(name, department, price, done) {
    $.post('/api/products', {
            name: name,
            department: department,
            price: price
        }, function (data) {
            done(data);
        }
    );
}

function createProductCard(product) {
    return $(`
    <div class="col-lg-3 col-md-3 m-2">
    <div class="card h-100 mt-3">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="${product.name}"></a>
        <div class="card-body">
            <h4 class="card-title product-name">${product.name}</h4>
            <h5 class="card-title product-price">${product.price}</h5>
            <p class="card-text product-department">${product.department}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted"><button class="btn btn-primary">Buy</button></small>
        </div>
    </div>
    </div>
    `);
}