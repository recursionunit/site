<template>
    <div class="flex flex-col h-screen">
        <RecursionunitHeader />
        <div class="h-screen bg-cover bg-no-repeat bg-black"
            style="background-image: url('./images/computing-fields-dev.png');">
            <div class="m-5">
                <slot />
            </div>
        </div>
        <RecursionunitFooter />
    </div>
</template>