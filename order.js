(function () {
    var links = {"qd_plus_5_month": "https://buy.stripe.com/8x28wP4F96la2eR15f8Zq00", "qd_plus_5_year": "https://buy.stripe.com/5kQdR94F9aBq4mZ3dn8Zq01", "qd_plus_10_month": "https://buy.stripe.com/eVq14nfjNbFucTv7tD8Zq02", "qd_plus_10_year": "https://buy.stripe.com/4gMdR97RldNC6v78xH8Zq03", "qd_plus_25_month": "https://buy.stripe.com/14AbJ11sX4d25r37tD8Zq04", "qd_plus_25_year": "https://buy.stripe.com/fZu3cv6Nh24UaLncNX8Zq05", "qd_plus_50_month": "https://buy.stripe.com/5kQfZh8VpeRG6v729j8Zq06", "qd_plus_50_year": "https://buy.stripe.com/14A9AT6Nh10Qg5H7tD8Zq07", "qd_plus_100_month": "https://buy.stripe.com/fZu6oH2x1dNCg5H15f8Zq08", "qd_plus_100_year": "https://buy.stripe.com/7sY3cv3B57pe06JaFP8Zq09", "qd_pro_5_month": "https://buy.stripe.com/00wdR9b3x7pe7zb9BL8Zq0a", "qd_pro_5_year": "https://buy.stripe.com/4gM7sLgnR5h66v79BL8Zq0b", "qd_pro_10_month": "https://buy.stripe.com/5kQcN51sX9xm9Hj7tD8Zq0c", "qd_pro_10_year": "https://buy.stripe.com/00wbJ18Vp9xmdXzeW58Zq0d", "qd_pro_25_month": "https://buy.stripe.com/aFa4gz8Vp7pef1D29j8Zq0e", "qd_pro_25_year": "https://buy.stripe.com/28E4gz7RlfVKbPr4hr8Zq0f", "qd_pro_50_month": "https://buy.stripe.com/9B65kD0oT8tidXz7tD8Zq0g", "qd_pro_50_year": "https://buy.stripe.com/fZu5kD2x1fVKf1D29j8Zq0h", "qd_pro_100_month": "https://buy.stripe.com/9B63cvdbFdNCdXz4hr8Zq0i", "qd_pro_100_year": "https://buy.stripe.com/eVq5kD4F9gZO7zb8xH8Zq0j"};
    var prices = {"plus": {"5": 15, "10": 29, "25": 49, "50": 89, "100": 149}, "pro": {"5": 29, "10": 55, "25": 99, "50": 179, "100": 299}};
    var form = document.getElementById('order-form');
    function pick() {
        var plan = form.plan.value, band = form.band.value, yearly = form.interval.value === 'year';
        var p = prices[plan][band] * (yearly ? 10 : 1);
        document.getElementById('order-price').textContent = '\u00a3' + p.toLocaleString('en-GB');
        document.getElementById('order-per').textContent = yearly ? '/ year' : '/ month';
        return links['qd_' + plan + '_' + band + '_' + form.interval.value];
    }
    form.addEventListener('change', pick);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var url = pick();
        if (url) { window.location.href = url; }
    });
    document.querySelectorAll('a[data-plan]').forEach(function (a) {
        a.addEventListener('click', function () { form.plan.value = a.getAttribute('data-plan'); pick(); });
    });
    pick();
})();
