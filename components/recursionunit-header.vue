<template>
    <div class="navbar bg-black">
        <div class="navbar-start">
            <div class="avatar">
                <div class="w-8">
                    <NuxtImg src="./images/logo.png" />
                </div>
            </div>
            <a class="btn btn-ghost text-xl" href="/">recursionunit</a>
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
            <a class="btn" href="mailto:info@recursionunit.io">contact</a>
        </div>
    </div>
</template>