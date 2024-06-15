<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase'
import router from '@/router'

const loading = ref(false)

const handleKakaoLogin = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',   
      options: {
        redirectTo: `http://localhost:5173/auth/callback` },
    })
    if (error) throw error
    alert('now you are going to login with Kakao Account!')
    
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
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