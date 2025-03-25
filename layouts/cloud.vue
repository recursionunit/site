<template>
    <div class="flex flex-col h-screen">
        <RecursionunitHeader />
        <div class="h-screen bg-cover bg-no-repeat bg-black"
            style="background-image: url('./images/computing-fields-cloud.png');">
            <div class="page-content">
                <slot />
            </div>
        </div>
        <RecursionunitFooter />
    </div>
</template>