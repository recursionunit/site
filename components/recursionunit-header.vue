<template>
    <div class="navbar bg-black">
        <div class="navbar-start">
            <div class="avatar">
                <div class="w-8">
                    <NuxtImg src="/images/logo.jpg" alt="recursionunit logo"/>
                </div>
            </div>
            <NuxtLink class="btn btn-ghost text-xl -ml-2" to="/">recursionunit</NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><NuxtLink to="/dev">dev</NuxtLink></li>
                <li><NuxtLink to="/data">data</NuxtLink></li>
                <li><NuxtLink to="/cloud">cloud</NuxtLink></li>
                <li><NuxtLink to="/security">security</NuxtLink></li>
                <li><NuxtLink to="#">platform</NuxtLink></li>
            </ul>
        </div>
        <div class="navbar-end">
            <NuxtLink class="btn btn-circle btn-lg mr-3" to="mailto:info@recursionunit.io">
                <Icon name="mdi-light:email" />
            </NuxtLink>
            <div class="dropdown dropdown-end mr-2">
                <div tabindex="0" role="button" class="btn btn-circle btn-lg">
                    <Icon name="mdi-light:account" />
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <!--
                    <li>
                        <a class="justify-between">
                            profile
                        </a>
                    </li>
                -->
                    <li><NuxtLink to="#">login</NuxtLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>
