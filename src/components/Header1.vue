<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
       
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Hacker News</router-link>
        
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link to="/new" active-class="active" tag="li">
            <a>New</a>
          </router-link>
          <router-link to="/past" active-class="active" tag="li">
            <a>Past</a>
          </router-link>
          <router-link to="/comments" active-class="active" tag="li">
            <a>Comments</a>
          </router-link>
          <router-link to="/ask" active-class="active" tag="li">
            <a>Ask</a>
          </router-link>
          <router-link to="/show" active-class="active" tag="li">
            <a>Show</a>
          </router-link>
          <router-link to="/jobs" active-class="active" tag="li">
            <a>Jobs</a>
          </router-link>
          <router-link to="/submit" active-class="active" tag="li">
            <a>Submit</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>