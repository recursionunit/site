<template>
    <div class="flex flex-col h-screen">
        <RecursionunitHeader />
        <div class="h-screen bg-cover bg-no-repeat bg-black bg-[url(/images/computing-fields-data.png)]">
            <div class="page-content">
                <slot />
            </div>
        </div>
        <RecursionunitFooter />
    </div>
</template>