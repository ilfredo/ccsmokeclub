const filters = document.getElementById("filters");
filters.innerHTML = `
    <section id="filters" data-auto-filter="true" class="card p-3">
        <h5>Filters</h5>
        <section class="mb-4" data-filter="condition">
            <h6 class="font-weight-bold mb-3">Condition</h6>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="new" id="condition-checkbox">
                <label class="form-check-label text-uppercase small text-muted" for="condition-checkbox">
                    New
                </label>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="used" id="condition-checkbox2">
                <label class="form-check-label text-uppercase small text-muted" for="condition-checkbox2">
                    Used
                </label>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="collectible" id="condition-checkbox3">
                <label class="form-check-label text-uppercase small text-muted" for="condition-checkbox3">
                    Collectible
                </label>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="renewed" id="condition-checkbox4">
                <label class="form-check-label text-uppercase small text-muted" for="condition-checkbox4">
                    Renewed
                </label>
            </div>
        </section>
        <section class="mb-4">
            <h6 class="font-weight-bold mb-3">Avg. Customer Review</h6>
            <ul class="list-group list-group-horizontal" data-toggle="rating" id="filter-rating" tabindex="0">
                <li>
                    <i class="far fa-star fa-sm text-secondary" title="" data-toggle="tooltip" data-original-title="1"></i>
                </li>
                <li>
                    <i class="far fa-star fa-sm text-secondary" title="" data-toggle="tooltip" data-original-title="2"></i>
                </li>
                <li>
                    <i class="far fa-star fa-sm text-secondary" title="" data-toggle="tooltip" data-original-title="3"></i>
                </li>
                <li>
                    <i class="far fa-star fa-sm text-secondary" title="" data-toggle="tooltip" data-original-title="4"></i>
                </li>
                <li>
                    <i class="far fa-star fa-sm text-secondary" title="" data-toggle="tooltip" data-original-title="5"></i>
                </li>
            </ul>
            </section>
            <section class="mb-4">
                <h6 class="font-weight-bold mb-3">Price</h6>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="price-radio">
                    <label class="form-check-label text-uppercase small text-muted" for="price-radio">
                        Under $25
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="price-radio2">
                    <label class="form-check-label text-uppercase small text-muted" for="price-radio2">
                      $25 to $50
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="price-radio3">
                    <label class="form-check-label text-uppercase small text-muted" for="price-radio3">
                      $50 to $100
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="price-radio4">
                    <label class="form-check-label text-uppercase small text-muted" for="price-radio4">
                      $100 to $200
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="price-radio5">
                    <label class="form-check-label text-uppercase small text-muted" for="price-radio5">
                      $200 &amp; above
                    </label>
                </div>
            </section>
            <section class="mb-4" data-filter="size">
                <h6 class="font-weight-bold mb-3">Size</h6>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="34" id="price-checkbox">
                    <label class="form-check-label text-uppercase small text-muted" for="price-checkbox">
                      34
                    </label>
                </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="36" id="price-checkbox2">
                    <label class="form-check-label text-uppercase small text-muted" for="price-checkbox2">
                      36
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="38" id="price-checkbox3">
                    <label class="form-check-label text-uppercase small text-muted" for="price-checkbox3">
                      38
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="40" id="price-checkbox4">
                    <label class="form-check-label text-uppercase small text-muted" for="price-checkbox4">
                      40
                    </label>
                  </div>
                </section>
                <section class="mb-4" data-filter="color">
                <h6 class="font-weight-bold mb-3">Color</h6>
                <div class="form-check form-check-inline m-0 p-0 pr-3">
                    <input class="btn-check" type="radio" name="colorRadio" id="colorRadio1" value="white">
                    <label class="btn bg-light btn-rounded p-3"  style="background-color: #F2F4F4"></label>
                </div>
                <div class="form-check form-check-inline m-0 p-0 pr-3">
                    <input class="btn-check" type="radio" name="colorRadio" id="colorRadio2" value="gray">
                    <label class="btn btn-rounded p-3" for="colorRadio2" style="background-color: #CCD1D1"></label>
                </div>
                <div class="form-check form-check-inline m-0 p-0 pr-3">
                    <input class="btn-check" type="radio" name="colorRadio" id="colorRadio3" value="grey">
                    <label class="btn bg-dark text-white btn-rounded p-3" for="colorRadio3" style="background-color: #99A3A4"></label>
                </div>
            </section>
        </section>`;