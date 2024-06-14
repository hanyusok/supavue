<script setup>

</script>

<template>    
    <nav>
        <Routerlink to="/home">Home</Routerlink>
        <Routerlink to="/calldoctor">Call Doctor</Routerlink>
        <Routerlink to="/messagesfromdoctor">Messages from Doctor</Routerlink>
    </nav>
    <main>
        <RouterView />
    </main>    
</template>