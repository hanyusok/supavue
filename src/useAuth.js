import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'

const user = ref(null)
const loading = ref(false)

export function useAuth(){
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
    
    const signOut = async () => {
        try {
          loading.value = true
          const { error } = await supabase.auth.signOut()
          user.value = null
          if (error) throw error
        } catch (error) {
          alert(error.message)
        } finally {
          loading.value = false
        }
      }

    const getUser = async () => {
       await supabase.auth.getSession().then(({ data }) => {
            user.value = data.session    
          })
    }

    onMounted(() => {
        getUser()
        supabase.auth.onAuthStateChange((_, _session) => {
            user.value = _session?.user || null
          })
    })

    return {
        user,
        handleKakaoLogin,
        signOut,
        getUser
    }

}