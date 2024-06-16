<script setup>
import { ref } from 'vue'
import router from '@/router'
import {useAuth}  from '@/useAuth'
  
const { kakaoLogin, user, loading } = useAuth()   
const handleKakaoLogin = async () => {
  try {
    await kakaoLogin()
    router.push('/home')
  } catch (error) {
    alert(error.message)
  }
}
    
</script>

<template>
    <div class="col-6 primary">
    <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign in via social link with KakaoTalk</p>
    <button @click="handleKakaoLogin" >카카오 로그인</button>
  </div>
  </template>
  
  