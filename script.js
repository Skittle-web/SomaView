.total{
    margin: 0;
    width: 100%;
    padding: 0;
}

.page{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

.header{
    width:100%;
    height: 100px;
    position:relative;
    position: fixed;
    float: right;
    background-color: #0A575B;
    padding: 0;
    margin: 0;
    z-index: 10;
}

.head__logo_img{
    height: 80%;
    margin-top: 10px;
    margin-left: 10px;
}

.head__lang{
    width: 60px;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    position: absolute;
    right: 200px;
    top: 30%;
    display: grid;
    grid-template-columns: 60% 40%;
}

.lang_line{
    width: 20px;
    margin: auto;
    margin-top: 7px;
}

.lang_txt{
    width: 65%;
    color: white;
    margin: 0;
    font-family: inter;
    font-size: 20px;
}

.head__login{
    height: 40%;
    aspect-ratio: 177 / 68; 
    overflow: hidden;
    margin: 0;
    position: absolute;
    right: 50px;
    top: 27%;
    display: grid;
    grid-template-columns: 70% 30%;
    padding: 0;
    border: none;
    border-radius: 59px;
    cursor: pointer;
}

.login_img{
    margin-top: 5px;
    margin-left: 1px;
    height: 30px;
    float: right;
}

.main{
    width: 100%;
    padding: 0;
    padding-top: 100px;
    margin: 0;
    display: grid;
    grid-template-columns: 25% 60%;
    gap: 60px;
}

.main__img{
    width: 100%;
    pointer-events: none;
    padding: 0;
    margin: 0;
}

.main__txt{
    width: 350px;
    height: 100px;
    font-family: inter;
    font-size: 45px;
    font-weight: 450;
    margin: 0;
    padding: 0;
    padding-top: 70px;
    grid-column: 2;
    grid-row:1;
}

.main__un_txt{
    grid-column: 2;
    grid-row: 1;
    width: 100%;
    height: 30px;
    margin: 0;
    margin-top: 200px;
    font-family:inter;
    font-size: 20px;
    font-weight:350;
}

.main__see{
    width: 150px;
    height: 40px;
    background-color: #0A575B;
    border: none;
    grid-column: 2;
    grid-row: 1;
    margin-top: 270px;
    border-radius: 20px;
    cursor: pointer;
}

.see_txt{
    margin: 0;
    color: white;
    font-family: inter;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 400;
}

.img_1{
    width: 150px;
    grid-column: 2;
    grid-row: 1;
    margin-top: 360px;
}

.img_2{
    width: 150px;
    grid-column: 2;
    grid-row: 1;
    margin-top: 360px;
    margin-left: 170px;
}

.img_3{
    width: 150px;
    grid-column: 2;
    grid-row: 1;
    margin-top: 360px;
    margin-left: 340px;
}

.login_txt{
    font-family: inter;
    font-size: 20px;
    width: 100%;
    height: 25px;
    margin-left: 3px;
    margin-top: 8px;
    letter-spacing: 0.5px;
    color:#0A575B ;
    overflow: hidden;
}

.log_block{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 98;
    display:none;
}

.main_login{
    position: relative;
    z-index: 99;
    margin: auto;
    height: 400px;
    width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    overflow: hidden;
    display: grid;
    grid-template-rows: 100px 40px 70px 30px 70px 50px 40px;
}

.back_login{
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.5;
    z-index: 97;
}

.log_block_txt{
    height: 60%;
    font-family: inter;
    font-size:40px;
    color: white;
    margin: 0;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 7px;
    background-color: #0A575B;
}

.auth1{
    margin: 0;
    margin-left: 40px;
    font-family: inter;
    font-size: 20px;
    padding-top: 20px    ;
}

.inp1{
    padding: 0;
    margin: 0;
    margin-left:40px;
    margin-right: 40px;
    margin-bottom: ;
    height: 30px;
    border: none;
    outline: 2px solid #919191;
    border-radius: 8px;
    margin-top: 10px;
    font-family: inter;
    font-size: 18px;
    font-weight: 500;
    padding-left: 5px;
}

.auth2{
    margin: 0;
    font-family: inter;
    margin-left: 40px;
    font-size: 20px;
}

.inp2{
    border: none;
    outline: 2px solid #919191;
    border-radius: 8px;
    height: 30px;
    font-family: inter;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    padding-right: 40px; /* Место для кнопки */
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    box-sizing: border-box;
}

.end_login{
    margin-left: 40px;
    margin-right: 40px;
    background-color:#0A575B;
    border: none;
    border-radius: 13px;
    cursor: pointer;
}

.end_txt{
    margin: 0;
    color: white;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 30px;
    color: white;
    cursor: pointer;
    z-index: 100;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.password-container {
    position: relative;
    margin-left: 40px;
    margin-right: 40px;
}

.toggle-password {
    position: absolute;
    right: 5px;
    top: 15px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 5px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.toggle-password:hover {
    background-color: #f0f0f0;
    border-radius: 50%;
}

.eye{
    height: 15px;
    width: 15px;
}

.main__block{
    height: 2400px;
}

.create-account-link {
    text-align: center;
    font-family: inter;
    font-size: 14px;
    color: #666;
    margin-top: 15px;
    grid-row: 7;
}

.create-account-link a {
    color: #0A575B;
    text-decoration: none;
    font-weight: 500;
}

.create-account-link a:hover {
    text-decoration: underline;
}

/* Секция с жильем */
.housing-section {
    display: grid;
    grid-template-columns: 25% 60%;
    gap: 60px;
    padding: 40px;
    margin-top: 50px;
    scroll-margin-top: 100px;
}

/* Левая часть - фильтры */
.filters-sidebar {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    height: fit-content;
}

.filters-title {
    font-family: inter;
    font-size: 28px;
    color: #0A575B;
    margin-bottom: 25px;
    font-weight: 600;
}

.search-container {
    margin-bottom: 25px;
}

.search-input {
    width: 85%;
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: inter;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
}

.search-input:focus {
    border-color: #0A575B;
}

.filters-container {
    margin-bottom: 30px;
}

.filter-checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
    font-family: inter;
    font-size: 16px;
    color: #333;
    position: relative;
    padding-left: 35px;
}

.filter-input, .create-filter {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: all 0.3s;
}

.filter-checkbox:hover .checkmark {
    border-color: #0A575B;
}

.filter-input:checked ~ .checkmark,
.create-filter:checked ~ .checkmark {
    background-color: #0A575B;
    border-color: #0A575B;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.filter-input:checked ~ .checkmark:after,
.create-filter:checked ~ .checkmark:after {
    display: block;
}

.create-housing-btn {
    width: 100%;
    padding: 15px;
    background-color: #0A575B;
    color: white;
    border: none;
    border-radius: 10px;
    font-family: inter;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.create-housing-btn:hover {
    background-color: #08484c;
}

/* Правая часть - карточки */
.housing-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
}

.housing-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.housing-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.housing-card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;	
}

.housing-card-content {
    padding: 20px;
}

.housing-card-title {
    font-family: inter;
    font-size: 20px;
    font-weight: 600;
    color: #0A575B;
    margin-bottom: 10px;
}

.housing-card-features {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
}

.feature-tag {
    background: #e8f4f5;
    color: #0A575B;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-family: inter;
}

/* Модальные окна */
.create-modal, .view-modal, .register-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}

.create-content, .view-content, .register-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 40px;
    border-radius: 20px;
    width: 70%;
    max-width: 90%;
    z-index: 1002;
    max-height: 80vh;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
}

.create-content::-webkit-scrollbar,
.view-content::-webkit-scrollbar,
.register-content::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
}

.create-backdrop, .view-backdrop, .register-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1001;
}

.close-create-btn, .close-view-btn, .close-register-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 30px;
    color: #0A575B;
    cursor: pointer;
}

.create-title, .view-title, .register-title {
    font-family: inter;
    font-size: 28px;
    color: #0A575B;
    margin-bottom: 25px;
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    font-family: inter;
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
    font-weight: 500;
}

.create-name, .create-image, .create-description {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: inter;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
    box-sizing: border-box;
}

.create-image[type="file"] {
    padding: 8px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: inter;
    font-size: 14px;
    background: white;
    cursor: pointer;
}

.create-image[type="file"]:focus {
    border-color: #0A575B;
}

.create-description {
    height: 100px;
    resize: vertical;
}

.create-name:focus, .create-image:focus, .create-description:focus {
    border-color: #0A575B;
}

.filters-label {
    margin-bottom: 15px !important;
}

.create-filters {
    display: grid;
    gap: 10px;
}

.submit-create-btn {
    width: 100%;
    padding: 15px;
    background-color: #0A575B;
    color: white;
    border: none;
    border-radius: 10px;
    font-family: inter;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
}

.submit-create-btn:hover {
    background-color: #08484c;
}

.view-description {
    font-family: inter;
    font-size: 16px;
    line-height: 1.6;
    color: #666;
    margin-bottom: 20px;
}

.view-features {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

/* Стили для формы регистрации */
.register-form {
    display: grid;
    gap: 20px;
}

.register-group {
    margin-bottom: 15px;
}

.register-group label {
    display: block;
    font-family: inter;
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
    font-weight: 500;
}

.register-input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: inter;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
    box-sizing: border-box;
}

.register-input:focus {
    border-color: #0A575B;
}

.submit-register-btn {
    width: 100%;
    padding: 15px;
    background-color: #0A575B;
    color: white;
    border: none;
    border-radius: 10px;
    font-family: inter;
    font-size: 18px;
    cursor: pointer;
    margin-top: 10px;
}

.submit-register-btn:hover {
    background-color: #08484c;
}

/* Стили для контейнеров пароля в регистрации */
.register-group .password-container {
    position: relative;
    margin: 0;
}

.register-group .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 5px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.register-group .toggle-password:hover {
    background-color: #f0f0f0;
    border-radius: 50%;
}

.register-group .password-container .register-input {
    padding-right: 40px;
    width: 100%;
}

.small{
	font-family: inter;
}


@media (width < 768px){
	.main{
		gap: 20px;
		grid-template-columns: 30% 45%;
		padding-right: 40px;
	}
	.img_1, .img_2, .img_3{
		width: 70px;
		margin-top: 260px;
	}

	.img_2{
		margin-left: 80px;
	}

	.img_3{
		margin-left: 160px;
		display: none;
	}

	.main__txt{
		font-size: 19px;
		width: none;
	}

	.main__un_txt{
		font-size: 15px;
		margin-top: 160px;
	}

	.main__see{
		margin-top: 200px;
	}

	.head__lang{
		right: 180px;
	}

	.head__login{
		right: 40px;
	}

	.search-input{
		font-size: 12px;
	}
}

@media (width < 700px){
	.housing-section{
		display: block;
		gap: 30px;
	}

	.head__lang{
		right:170px;
	}

}

