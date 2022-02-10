<template>
  <div class="d-flex flex-column h-100">
    <!-- Begin page content -->
    <main role="main" class="flex-shrink-0">
      <div class="container">
        <h1 class="mt-5">Авторизация</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Логин</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите логин"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Введите пароль"
          />
          <small id="emailHelp" class="form-text text-muted"
            >Забыли пароль</small
          >
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    retutn {
      login: '',
      password: ''
    }
  }
}
</script>
<style scoped>
main .container {
  padding-top: 60px;
}
</style>