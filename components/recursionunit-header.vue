<template>
    <div class="navbar bg-black">
        <div class="navbar-start">
            <div class="avatar">
                <div class="w-8">
                    <NuxtImg src="./images/logo.png" />
                </div>
            </div>
            <a class="btn btn-ghost text-xl -ml-2" href="/">recursionunit</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><a href="/dev">dev</a></li>
                <li><a href="/data">data</a></li>
                <li><a href="/cloud">cloud</a></li>
                <li><a href="/security">security</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn btn-circle btn-lg mr-3" href="mailto:info@recursionunit.io">
                <Icon name="mdi-light:email" />
            </a>
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
                    <li><a>login</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
